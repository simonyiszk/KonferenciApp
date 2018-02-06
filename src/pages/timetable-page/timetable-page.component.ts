import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../shared/data.service';
import { LoadingController } from 'ionic-angular';
import { ProgramDetailPageComponent } from '../program-detail-page/program-detail-page.component';
import { Platform } from 'ionic-angular';

export class Program {
    id: number;
    title: string;
    performer: string;
    time: string;
    picture: string;
    text: string;
    url: string;
    break: string;
}

export class TimeTable {
    room: string;
    programs: Program[];
}

@Component({
    selector: 'timetable-page',
    templateUrl: 'timetable-page.component.html',
    providers: [DataService]
})
export class TimetablePageComponent implements OnInit {

    private isAndroid: boolean;

    constructor(public platform: Platform, public navCtrl: NavController, private dataService: DataService, public loadingCtrl: LoadingController) {
        if (platform.is("cordova")) {
          if (platform.is("android")) {
              this.isAndroid = true;
          }
        }
    }

    private selectedRoom;
    private filteredTimeTable: any[];
    private timetable: any[];
    private loaded = false;

    ngOnInit() {
        let dataLoaderIndicator = this.loadingCtrl.create({ content: "Adatok betöltése..." });
        dataLoaderIndicator.present();
        this.dataService.getTimeTable().then(resp => {
            this.filteredTimeTable = this.timetable = resp;
            this.selectedRoom = this.timetable[0].room;
            this.loaded = true;
            dataLoaderIndicator.dismiss();
        }).catch(error => {
        });
    }

    changeRoom() {
        this.filteredTimeTable = this.timetable;
    }

    getProgramData(id: number, inbreak: string) {
      if(inbreak === "0") {
        this.navCtrl.push(ProgramDetailPageComponent, {
            id: id
        });
      }
    }

    isBreak(val) {
      return (val === "1") ? true : false;
    }

    swipeEvent(e) {
      if (e.direction == 2) {
        this.selectedRoom = "IB025";
      } else if(e.direction == 4) {
        this.selectedRoom = "IB028";
      }
    }
}
