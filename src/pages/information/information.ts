import { Component, HostListener } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';

import { InformationProvider } from '../../providers/information/information';
import { PostProvider } from '../../providers/post/post';

@Component({
  selector: 'page-information',
  templateUrl: 'information.html'
})
export class InformationPage {

  data: any = {};

  constructor(public postData: PostProvider, public infoData: InformationProvider, public alertCtrl: AlertController, public platform: Platform, public navCtrl: NavController) {
    infoData.get().subscribe(data => {
      this.data = data;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeCircle(event.target.innerWidth);
  }

  ionViewDidLoad() {
    this.resizeCircle(this.platform.width());
  }

  reportIssue() {
    let issueAlert = this.alertCtrl.create({
      title: "Hiba jelentése",
      message: "Amennyiben valamilyen hibát tapasztaltál az alkalmazásban vagy a rendezvényen, kérjük jelezd nekünk",
      inputs: [
        {
          name: 'message',
          placeholder: 'Üzenet'
        }
      ],
      buttons: [
        {
          text: 'Mégse',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Küldés',
          handler: data => {
            if (data.message) {
              this.postData.sendReport(data.message).then((response) => {
                responseAlert.present();
              }).catch((error) => {
                console.log("Something went wrong:", error);
              });
            } else {
              // Empty message
              return false;
            }
          }
        }
      ]
    });
    let responseAlert = this.alertCtrl.create({
      title: "Köszönjük a visszajelzést!",
      buttons: ['OK']
    });
    issueAlert.present();
  }

  resizeCircle(width: number) {
    //(w/2)^2/10 + 2,5 = r
    let height;
    if (window.matchMedia("(max-width: 370px)").matches) {
      height = 109;
    } else {
      height = 55
    }
    const hStr = height + "rem";
    document.getElementById("svg").setAttribute('height', hStr);

    const platWidth = width / 10;
    const r = (platWidth * platWidth / 40 + 2.5);
    const rStr = r + "rem";
    document.getElementById("svgcircle").setAttribute('r', rStr);

    const yStr = (r + height - 5) + "rem";
    document.getElementById("svgcircle").setAttribute('cy', yStr);
  }
}
