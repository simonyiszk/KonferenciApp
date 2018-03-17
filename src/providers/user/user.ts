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

  loggedIn: any;
  favorites: number[] = [];

  constructor(public http: Http, public storage: Storage) {
    this.storage.get("logged").then((value) => {
      //this.loggedIn = value ? value : 0; UNTIL LOGING IS NOT WORKING
      this.loggedIn = 1;
    })
    .then(() => {
      if(this.loggedIn){
        this.storage.get("username").then((value) => {
          this.favorites = value;
        });
      }
    });
  }

  addFavorite(id:number){
    this.storage.set("username", [...this.favorites, id]).then(() => {
      this.favorites.push(id);
    });
  }
  removeFavorite(id:number){
    let tmp = [...this.favorites];
    var index = tmp.indexOf(id);
    while (index !== -1) {
      tmp.splice(index, 1);
      index = tmp.indexOf(id);
    }
    this.storage.set("username", tmp).then(() => {
      this.favorites = tmp;
    });
  }
  isFavorite(id:number){
    return this.favorites.indexOf(id)>-1;
  }
}
