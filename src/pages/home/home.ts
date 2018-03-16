import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LocationPage } from '../location/location';
import { GamePage } from '../game/game';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  favorite(){
    this.navCtrl.parent.select(1);
  }
  location(){
    this.navCtrl.push(LocationPage);
  }
  game(){
    this.navCtrl.push(GamePage);
  }

}
