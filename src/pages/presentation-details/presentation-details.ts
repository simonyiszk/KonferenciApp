import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { PresentationProvider } from '../../providers/presentation/presentation';
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

  favoriteIcon = "./assets/icon/heart-favorite.svg";
  unfavoriteIcon = "./assets/icon/heart-unfavorite.svg";
  
  presentation: any;
  name: any;
  question: any;

  constructor(public userData: UserProvider, public presData: PresentationProvider, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
    this.presentation = this.navParams.data.presentation;
  }

  makeItFavorite() {
    if (this.userData.isFavorite(this.presentation.id)) {
      this.userData.removeFavorite(this.presentation.id);
    }
    else {
      this.userData.addFavorite(this.presentation.id);
    }
  }

  sendQuestion() {
    if (this.question) {
      this.presData.sendQuestion(this.presentation.id, this.name, this.question).subscribe((data: any) => {
        let toast = this.toastCtrl.create({
          message: 'A kérdést elküldtük',
          duration: 3000,
          position: 'top'
        });
        toast.present();
        this.question="";
      });
    }
  }
  isFavorite():string{
    return this.userData.isFavorite(this.presentation.id) ? this.favoriteIcon : this.unfavoriteIcon;
  }
}
