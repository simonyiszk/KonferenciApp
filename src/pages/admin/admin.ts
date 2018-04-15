import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ExpoProvider } from '../../providers/expo/expo';
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

  constructor(public expoData: ExpoProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.loggedIn = this.expoData.adminLogged;
    console.log("ASDASD")
  }

  login() {
    if (this.password === "123") {
      this.expoData.adminLogged = true;
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }
  }
}
