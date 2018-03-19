import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  loggedIn: boolean;
  username: string;
  favorites: number[] = [];

  constructor(public http: Http, public storage: Storage) {
    this.storage.get("userLogin").then((value) => {
      this.loggedIn = !!value; //UNTIL LOGING IS NOT WORKING
      //this.loggedIn = true;
    })
      .then(() => {
        if (this.loggedIn) {
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
    });
  }
  isFavorite(id: number) {
    return this.favorites.indexOf(id) > -1;
  }
}
