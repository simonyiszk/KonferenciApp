import { Component } from '@angular/core';
import { NavController, AlertController, Refresher } from 'ionic-angular';

import { PresentationDetailsPage } from '../presentation-details/presentation-details';

import { PresentationProvider } from '../../providers/presentation/presentation';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-program',
  templateUrl: 'program.html'
})
export class ProgramPage {

  data: any;
  events: string;

  constructor(
    public user: UserProvider,
    public presData: PresentationProvider,
    public alertCtrl: AlertController,
    public navCtrl: NavController
  ) {
    this.events = 'IB025';
    this.change();
  }

  change() {
    this.presData.filterPresentation(this.events).subscribe((data: any) => {
      this.data = data;
      console.log(this.data);
    });
  }

  openPresentation(ev) {
    this.navCtrl.push(PresentationDetailsPage, { presentation: ev });
  }
  makeItFavorite(ev) {
    if (this.user.isFavorite(ev)) {

      let alert = this.alertCtrl.create({
        title: "Kedvenc törlése",
        message: 'Biztosan el szeretnéd távolítani a kedvenceid közül?',
        buttons: [
          {
            text: 'Mégsem',
            handler: () => {
            }
          },
          {
            text: 'Törlés',
            handler: () => {
              this.user.removeFavorite(ev).then(() => {
                if (this.events === 'favorite') {
                  this.change();
                }
              });
            }
          }
        ]
      });
      alert.present();
    }
    else {
      this.user.addFavorite(ev);
    }
  }
  doRefresh(refresher: Refresher) {
    this.presData.load().subscribe((data: any) => {
      refresher.complete();
      this.change();
    });
  }
}
