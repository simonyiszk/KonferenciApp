import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PresentationDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-presentation-details',
  templateUrl: 'presentation-details.html',
})
export class PresentationDetailsPage {

  presentation: any;
  question: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.presentation = this.navParams.data.presentation;
  }

  makeItFavorite(){
    console.log(this.presentation.id, " was marked as favorite");
  }

  sendQuestion(){
    //TODO
    console.log("question was sent", this.question);
  }
}
