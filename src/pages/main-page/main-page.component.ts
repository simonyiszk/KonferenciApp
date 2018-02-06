import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { LoadingController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { Push, PushToken } from '@ionic/cloud-angular';
import { Platform } from 'ionic-angular';

@Component({
    selector: 'main-page',
    templateUrl: 'main-page.component.html',
    providers: [DataService]
})
export class MainPageComponent implements OnInit {

    private isAndroid: boolean;

    constructor(public platform: Platform, public push: Push, public navCtrl: NavController, public navParams: NavParams, private dataService: DataService, public loadingCtrl: LoadingController) {
        if (platform.is("cordova")) {
          if (platform.is("android")) {
              this.isAndroid = true;
          }
        }
    }

    ngOnInit() {
        if (this.platform.is('cordova')) {
            this.push.register().then((t: PushToken) => {
              return this.push.saveToken(t);
          }).then((t: PushToken) => {
          });

          this.push.rx.notification().subscribe((msg) => {
          });
        }

    }
}
