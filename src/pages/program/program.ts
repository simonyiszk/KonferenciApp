import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-program',
  templateUrl: 'program.html'
})
export class ProgramPage {

  events:any;

  constructor(public navCtrl: NavController) {
    this.events = 'ib025';
  }

  change(){

  }

}
