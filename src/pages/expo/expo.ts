import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { ExpoProvider } from '../../providers/expo/expo';

@Component({
  selector: 'page-expo',
  templateUrl: 'expo.html'
})
export class ExpoPage {

  data: any;

  constructor(public expoData: ExpoProvider, public alertCtrl: AlertController, public navCtrl: NavController) {
    expoData.get().subscribe((data: any) => {
      this.data = data;
    });
  }

  openExpo(ev) {
    //this.navCtrl.push(ExpoDetailsPage, { expo: ev });
    let alert = this.alertCtrl.create({
      title: ev.name,
      message: ev.description,
      buttons: [
        {
          text: 'OK',
          handler: () => {
          }
        }
      ]
    });
    alert.present();
  }
}
