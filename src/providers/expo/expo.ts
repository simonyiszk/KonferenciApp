import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { ToastController } from 'ionic-angular'

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

  constructor(public toastCtrl: ToastController, private storage: Storage, public http: Http) {
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
    if (this.userList.filter((v) => v === user).length == 0) {
      this.storage.set("users", [...this.userList, user]).then(() => {
        this.userList.push(user);
      });
    }
  }
  deleteUsers() {
    this.storage.remove("users").then(() => {
      this.userList = [];
    });
  }
  sendData() {
    if (this.userList.length > 0) {
      const data = this.formatJSON();
      console.log(`${environment.gameURL}?${data}`)
      this.http.get(`${environment.gameURL}?${data}`).subscribe((data: any) => {
        console.log(data);
        let toast = this.toastCtrl.create({
          message: 'Sikeresen szinkronizáció',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      });
    }
    else {
      let toast = this.toastCtrl.create({
        message: 'Nincs szkennelt adat',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }
  formatJSON(): string {
    const userJSON = this.userList.reduce((accumulator, currentValue) => {
      return accumulator + `{"mail":"${currentValue}"},`;
    }, "").slice(0, -1)
    return `id=${this.expoID}&json=[${userJSON}]`;
  }
}
