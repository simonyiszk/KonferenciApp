import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

export class Stand {
    id: string;
    name: string;
    description: string;
}

@Component({
    selector: 'expo-page',
    templateUrl: 'expo-page.component.html',
    providers: [ DataService ]
})
export class ExpoPageComponent implements OnInit {

    private allStand;
    private loaded = false;
    private dataLoaderIndicator = this.loadingCtrl.create({ content: "Adatok betöltése..." });
    private picture = "http://gyromouse.net/weboldal/konferenciapi/map.png";

    private isAndroid: boolean;


    constructor(public platform: Platform, public alertCtrl: AlertController, private dataService: DataService, public loadingCtrl: LoadingController) {
        if (platform.is("cordova")) {
            if (platform.is("android")) {
                this.isAndroid = true;
            }
        }
    }

    ngOnInit() {
        
        this.dataLoaderIndicator.present();
        this.dataService.getStandData().then(resp => {
            this.allStand = resp as Stand;
            console.log(this.allStand);
            this.loaded = true;
        }).catch(error => {
            console.log(error);
        });
    }

    loadedPicture() {
        this.dataLoaderIndicator.dismiss();
    }

    openModal(name, msg) {
        let alert = this.alertCtrl.create({
            title: name,
            subTitle: msg,
            buttons: ['Bezár']
        });
        alert.present();
    }
}
