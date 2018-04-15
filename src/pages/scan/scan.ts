import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { ExpoProvider } from '../../providers/expo/expo';
/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  constructor(public expoData: ExpoProvider, private barcodeScanner: BarcodeScanner, public navCtrl: NavController, public navParams: NavParams) {
  }

  scanClicked() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.expoData.addUser(barcodeData.text);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
