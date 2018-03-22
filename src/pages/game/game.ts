import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  loggedIn: any;
  email: string;

  constructor(public userData: UserProvider, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
    this.loggedIn = userData.loggedIn;
  }

  login() {
    this.userData.login(this.email).then(() => {
      //ITS SO UGLY
      this.navCtrl.pop();
      this.navCtrl.push(GamePage);
      let toast = this.toastCtrl.create({
        message: 'Sikeresen regisztráltál a játékra',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });

  }
}
