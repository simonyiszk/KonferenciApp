import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { OneSignal } from "@ionic-native/onesignal";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  loggedIn: boolean;
  username: string = "Guest";
  favorites: number[] = [];
  currentPage = "IB028";
  lastBrightness: number;

  constructor(public http: Http, public storage: Storage, public oneSignal: OneSignal) {
    this.storage.get("userLogin").then((value) => {
      this.loggedIn = !!value;
      return value;
    })
      .then((value) => {
        if (this.loggedIn) {
          this.username = value;
          this.storage.get("favorites").then((value) => {
            this.favorites = value ? value : [];
          });
        }
      });
  }

  login(email: string): Promise<any> {
    //TODO: VALIDATE
    return this.storage.set("userLogin", email).then(() => {
      this.loggedIn = true;
      this.username = email;
    });
  }
  addFavorite(id: number): Promise<any> {
    return this.storage.set("favorites", [...this.favorites, id]).then(() => {
      this.favorites.push(id);
      this.oneSignal.sendTag(`pres${id}`, "1");
    });
  }
  removeFavorite(id: number): Promise<any> {
    let tmp = [...this.favorites];
    var index = tmp.indexOf(id);
    while (index !== -1) {
      tmp.splice(index, 1);
      index = tmp.indexOf(id);
    }
    return this.storage.set("favorites", tmp).then(() => {
      this.favorites = tmp;
      this.oneSignal.sendTag(`pres${id}`, "0");
    });
  }
  isFavorite(id: number) {
    return this.favorites.indexOf(id) > -1;
  }
}
