import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public user: UserProvider, public presData: PresentationProvider, public navCtrl: NavController) {
    this.events = 'IB025';
    this.change();
  }

  change() {
    console.log("CHANGED");
    this.presData.filterPresentation(this.events).subscribe((data: any) => {
      this.data = data;
      console.log(this.data);
    });
  }

  openPresentation(ev) {
    this.navCtrl.push(PresentationDetailsPage, { presentation: ev });
  }
  makeItFavorite(ev) {
    //TODO
    if (this.user.isFavorite(ev)) {
      this.user.removeFavorite(ev);
    }
    else {
      this.user.addFavorite(ev);
    }
  }
}
