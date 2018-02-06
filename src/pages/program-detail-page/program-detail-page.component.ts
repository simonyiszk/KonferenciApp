import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { LoadingController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';

export class Program {
    id: number;
    title: string;
    performer: string;
    titulus: string;
    time: string;
    picture: string;
    text: string;
    url: string;
}

@Component({
    selector: 'program-detail-page',
    templateUrl: 'program-detail-page.component.html',
    providers: [ DataService ]
})
export class ProgramDetailPageComponent implements OnInit {
    private selectedProgramId: number;
    private title: string;
    private performer: string;
    private titulus: string;
    private time: string;
    private picture: string;
    private text: string;
    private selectedProgram: Program;
    private loaded = false;
    private loadedPicture = false;
    private isAndroid: boolean;

    constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams, private dataService: DataService, public loadingCtrl: LoadingController) {
        this.selectedProgramId = this.navParams.get('id');
        if (platform.is("cordova")) {
          if (platform.is("android")) {
              this.isAndroid = true;
          }
        }
    }

    ngOnInit() {
        let programDetailLoaderIndicator = this.loadingCtrl.create({ content: "Program részleteinek a betöltése..." });
        programDetailLoaderIndicator.present();

        this.dataService.getProgram(this.selectedProgramId).then(resp => {
            this.selectedProgram = resp as Program;
            this.title = this.selectedProgram.title;
            this.performer = this.selectedProgram.performer;
            this.titulus = this.selectedProgram.titulus;
            this.time = this.selectedProgram.time;
            this.picture = this.selectedProgram.picture;
            this.text = this.selectedProgram.text;
            programDetailLoaderIndicator.dismiss();
            this.loaded = true;
        });
    }

    hideTempPicture() {
        this.loadedPicture = true;
    }
}
