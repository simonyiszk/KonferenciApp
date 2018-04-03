import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, Platform } from 'ionic-angular';

import { Brightness } from '@ionic-native/brightness';

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

  lightsOnIcon = "./assets/icon/light-bulb-on.svg";
  lightsOffIcon = "./assets/icon/light-bulb-off.svg";

  loggedIn: any;
  emailInput: string;
  lightsOn: boolean;
  lastBrightness: number;

  constructor(
    public userData: UserProvider,
    private brightness: Brightness,
    private platform: Platform,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.loggedIn = userData.loggedIn;
    this.lightsOn = false;
  }

  login() {
    if (this.emailInput)
      this.userData.login(this.emailInput).then(() => {
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

  switchLight() {
    if (this.platform.is("cordova")) {
      if (!this.lightsOn) {
        this.brightness.getBrightness()
          .then((value) => {
            this.lastBrightness = value;
            this.lightsOn = true;
          })
          .then(() => {
            this.brightness.setBrightness(1.0);
          });

      }
      else {
        this.brightness.setBrightness(this.lastBrightness);
        this.lightsOn = false;
      }
    }
    else{
      if (!this.lightsOn) {
        this.lightsOn = true;
      }
      else {
        this.lightsOn = false;
      }
    }
  }

  lightbulbIcon() {
    return this.lightsOn ? this.lightsOnIcon: this.lightsOffIcon;
  }
}
