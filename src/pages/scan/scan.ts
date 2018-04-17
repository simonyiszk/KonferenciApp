import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

import { AlertController } from 'ionic-angular';

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

  constructor(public expoData: ExpoProvider, public alertCtrl: AlertController, private barcodeScanner: BarcodeScanner, public navCtrl: NavController, public navParams: NavParams) {
  }

  scanClicked() {
    const options = {
      showTorchButton: true,
      orientation: 'portrait',
      resultDisplayDuration: 0
    }
    this.barcodeScanner.scan(options).then(barcodeData => {
      this.expoData.addUser(barcodeData.text);
      let alert = this.alertCtrl.create({
        title: "Siker",
        message: "Sikeres beolvasás",
        buttons: [
          {
            text: 'OK',
            handler: () => {
            }
          }
        ]
      });
      alert.present();
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
