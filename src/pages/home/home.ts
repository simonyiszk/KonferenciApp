import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { OneSignal } from '@ionic-native/onesignal';

import { LocationPage } from '../location/location';
import { GamePage } from '../game/game';

import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  text:string;
  constructor(/*private oneSignal: OneSignal, */public userData: UserProvider, public navCtrl: NavController) {
    this.text = "Valami";
    /*this.oneSignal.startInit('962eb6f9-c14b-4587-a025-1ff89486b119', '407073725617');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
      console.log("sub1");
      this.text = "recieve";
    // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
      console.log("sub2");
      this.text = "opened";
    });

    this.oneSignal.endInit();*/
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
