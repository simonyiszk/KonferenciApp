import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { ExpoProvider } from '../../providers/expo/expo';

import { environment } from '../../../environments/API';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  loggedIn: boolean;
  password: string;
  expoID: number;
  numberInput: string;

  constructor(public expoData: ExpoProvider, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.loggedIn = this.expoData.adminLogged;
    this.expoID = this.expoData.expoID;
  }

  login() {
    if (this.password === `${environment.adminPassword}`) {
      this.expoData.adminLogged = true;
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }
    this.password = "";
  }
  setExpoID() {
    /*const parsedNumber = parseInt(this.numberInput)
    if (parsedNumber) {
      this.expoData.setExpoID(parsedNumber).then(() => {
        this.expoID = parsedNumber;
      })
    }
    this.numberInput = "";*/
    let expoAlert = this.alertCtrl.create({
      title: "ExpoID beállítása",
      message: `Jelenglegi ID: ${this.expoID}`,
      inputs: [
        {
          name: 'expoid',
          placeholder: 'ExpoID',
          type: "number"
        }
      ],
      buttons: [
        {
          text: 'Mégse',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Küldés',
          handler: data => {
            const parsedNumber = parseInt(data.expoid)
            if (parsedNumber) {
              this.expoData.setExpoID(parsedNumber).then(() => {
                this.expoID = parsedNumber;
              })
            }
            else {
              // Empty message
              return false;
            }
          }
        }
      ]
    });
    expoAlert.present();
  }
  synchronize() {
    this.expoData.sendData();
  }
  delete() {
    let alert = this.alertCtrl.create({
      title: "Törlés",
      message: "Biztosan törlöd?",
      buttons: [
        {
          text: 'Mégse',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Törlés',
          handler: () => {
            this.expoData.deleteUsers();
          }
        }
      ]
    });
    alert.present();
  }
  logout() {
    this.expoData.adminLogged = false;
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}
