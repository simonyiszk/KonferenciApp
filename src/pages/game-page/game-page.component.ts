import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { BarcodeScanner } from 'ionic-native';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { Platform } from 'ionic-angular';


@Component({
    selector: 'game-page',
    templateUrl: 'game-page.component.html',
    providers: [ DataService ]
})
export class GamePageComponent implements OnInit {

    private name;
    private email;
    private noname = false;
    private isAndroid: boolean;

    constructor(public platform: Platform, public toastCtrl: ToastController, public alertCtrl: AlertController, public storage: Storage, private dataService: DataService) {
        if (platform.is("cordova")) {
          if (platform.is("android")) {
              this.isAndroid = true;
          }
        }
    }

    ngOnInit() {
      this.storage.ready().then(() => {

          this.storage.get('name').then((val) => {
            if(val === null || val === "") {
              this.alertData();
              this.noname = true;
            } else {
              this.name = val;
            }
          });

          this.storage.get('email').then((val) => {
            this.email = val;
          });

        });
    }

    qrScan() {
        if(!this.noname) {
            BarcodeScanner.scan().then((result) => {
                if (!result.cancelled) {
                    this.dataService.setGameQR(result.text, this.name, this.email);
                    this.presentToast("Sikeres QR kód beolvasás!");
                }
            }).catch((err) => {
            });
        } else {
            this.presentToast("Először az adatokat kell megadni, csak utána vehetsz részt a nyereményjátékban!");
        }
    }

    alertData() {
      let prompt = this.alertCtrl.create({
        title: 'Regisztráció',
        message: "Kérünk a nyereményjátékban való részvételért add meg a <b>teljes nevedet</b> és az <b>e-mail címedet!</b>",
        inputs: [
          {
            name: 'name',
            placeholder: 'Név',
            value: (this.name !== "") ? this.name : ""
          },
          {
            name: 'email',
            placeholder: 'E-mail',
            value: (this.email !== "") ? this.email : ""
          },
        ],
        buttons: [
          {
            text: 'Mégse',
            handler: data => {
              this.noname = true;
            }
          },
          {
            text: 'Mentés',
            handler: data => {
              if(data.name !== "" || data.email !== "") {
                this.storage.set('name', data.name);
                this.storage.set('email', data.email);
                this.name = data.name;
                this.email = data.email.toLowerCase();
                this.noname = false;
                this.presentToast("Sikeres adatmentés!");
              } else {
                this.noname = true;
                this.presentToast("Egyik mező sem lehet üres!");
              }
            }
          }
        ]
      });
      prompt.present();
    }

    presentToast(text: string) {
      let toast = this.toastCtrl.create({
        message: text,
        duration: 3000
      });
      toast.present();
    }
}
