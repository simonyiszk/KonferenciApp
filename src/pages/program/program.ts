import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PresentationDetailsPage } from '../presentation-details/presentation-details';

import { PresentationProvider } from '../../providers/presentation/presentation';

@Component({
  selector: 'page-program',
  templateUrl: 'program.html'
})
export class ProgramPage {

  data: any;
  events:string;

  constructor(public presData: PresentationProvider, public navCtrl: NavController) {
    this.events = 'IB025';
    this.change();
  }

  change(){
    console.log("CHANGED");
    this.presData.filterPresentation(this.events).subscribe((data: any) => {
      this.data = data;
      console.log(this.data);
    });
  }

  openPresentation(ev){
    this.navCtrl.push(PresentationDetailsPage, { presentation: ev });
  }
  makeItFavorite(ev){
    //TODO
    console.log(ev, " was marked az favorite");
  }
}
