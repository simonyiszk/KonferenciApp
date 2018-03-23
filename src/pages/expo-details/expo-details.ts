import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExpoDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-expo-details',
  templateUrl: 'expo-details.html',
})
export class ExpoDetailsPage {

  expo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.expo = this.navParams.data.expo;
  }

}
