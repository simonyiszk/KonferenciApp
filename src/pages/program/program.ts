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

  constructor(
    public userData: UserProvider,
    public presData: PresentationProvider,
    public alertCtrl: AlertController,
    public navCtrl: NavController
  ) {
    this.change();
  }

  change() {
    this.presData.filterPresentation(this.userData.currentPage).subscribe((data: any) => {
      this.data = data;
      console.log(this.data);
    });
    console.log(this.userData.currentPage);
  }
  swipeTo(page){
    console.log(page);
    this.userData.currentPage = page;
    this.change();
  }
  swipeEvent(ev) {
    switch (this.userData.currentPage) {
      case 'IB025':
      console.log("ib025");
        if (ev.direction == 2)
          this.swipeTo("favorite");
        break;
      case 'favorite':
      console.log("fav");
        if (ev.direction == 2)
          this.swipeTo("IB028");
        else if (ev.direction == 4)
          this.swipeTo("IB025");
        break;
      case 'IB028':
      console.log("ib028");
        if (ev.direction == 4)
          this.swipeTo("favorite");
        break;
      default:
        console.log('Something went wrong!');
    }
  }
  openPresentation(ev) {
    this.navCtrl.push(PresentationDetailsPage, { presentation: ev });
  }
  makeItFavorite(ev) {
    if (this.userData.isFavorite(ev)) {

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
              this.userData.removeFavorite(ev).then(() => {
                if (this.userData.currentPage === 'favorite') {
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
      this.userData.addFavorite(ev);
    }
  }
  doRefresh(refresher: Refresher) {
    this.presData.load().subscribe((data: any) => {
      refresher.complete();
      this.change();
    });
  }
}
