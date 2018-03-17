import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';
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

  constructor(public user: UserProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.presentation = this.navParams.data.presentation;
  }

  makeItFavorite(){
    if (this.user.isFavorite(this.presentation.id)) {
      this.user.removeFavorite(this.presentation.id);
    }
    else {
      this.user.addFavorite(this.presentation.id);
    }
  }

  sendQuestion(){
    //TODO
    console.log("question was sent", this.question);
  }
  isFavorite():string{
    return this.user.isFavorite(this.presentation.id) ? "ios-heart" : "ios-heart-outline";
  }
}