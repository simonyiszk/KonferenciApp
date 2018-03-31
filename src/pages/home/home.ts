import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OneSignal } from '@ionic-native/onesignal';

import { LocationPage } from '../location/location';
import { GamePage } from '../game/game';

import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  text:string;
  constructor(private oneSignal: OneSignal, public userData: UserProvider, public navCtrl: NavController) {
    this.text = "Helyszín";
  }

  favorite() {
    this.userData.currentPage="favorite";
    this.navCtrl.parent.select(1);
  }
  location() {
    this.navCtrl.push(LocationPage);
  }
  game() {
    this.navCtrl.push(GamePage);
  }

}
