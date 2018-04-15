import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { environment } from '../../../environments/API';
/*
  Generated class for the ExpoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExpoProvider {

  expoID: number;
  adminLogged: boolean;
  userList: string[];

  constructor(private storage: Storage, public http: Http) {
    this.userList = [];
    this.storage.get("expoID").then((value) => {
      if (value) {
        this.expoID = value;
      }
    })
    this.storage.get("users").then((value) => {
      if (value) {
        this.userList = value;
      }
    })
  }

  setExpoID(id: number): Promise<any> {
    return this.storage.set("expoID", id).then(() => {
      this.expoID = id;
    });
  }
  addUser(user: string) {
    this.storage.set("users", [...this.userList, user]).then(() => {
      this.userList.push(user);
    });
  }
  sendData() {
    const data=this.formatJSON();
    console.log(`${environment.gameURL}?${data}`)
    this.http.get(`${environment.gameURL}?${data}`);
  }
  formatJSON():string {
    const userJSON = this.userList.reduce((accumulator, currentValue) => {
      return accumulator+`{"name":"${currentValue}"},`;
    }, "").slice(0, -1)
    return `id=${this.expoID}&json=[${userJSON}]`;
  }
}
