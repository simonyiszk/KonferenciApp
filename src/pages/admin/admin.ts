import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public expoData: ExpoProvider, public navCtrl: NavController, public navParams: NavParams) {
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
  setExpo() {
    const parsedNumber = parseInt(this.numberInput)
    if (parsedNumber) {
      this.expoData.setExpoID(parsedNumber).then(() => {
        this.expoID = parsedNumber;
      })
    }
    this.numberInput = "";
  }
  synchronize() {
    this.expoData.sendData();
  }
  delete() {
    this.expoData.deleteUsers();
  }
  logout() {
    this.expoData.adminLogged = false;
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}
