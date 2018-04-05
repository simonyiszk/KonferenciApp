import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { PresentationProvider } from '../presentation/presentation';
import { ExpoProvider } from '../expo/expo';
import { PostProvider } from '../post/post';
/*
  Generated class for the PeriodicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeriodicProvider {

  lastDate: Date;

  constructor(public postData: PostProvider, public expoData: ExpoProvider, public presData: PresentationProvider, public http: Http) {
    this.lastDate = new Date("1997-06-16 00:00");
    setTimeout(this.task.bind(this), 300000);
  }

  task() {
    this.http.get(/*'http://gyromouse.net/weboldal/konferenciapi/last.php'*/'http://192.168.0.104:8080/favorites')
      .map(res => new Date(res.text())).subscribe((data) => {
        if (this.lastDate < data) {
          this.presData.load().subscribe();
          this.expoData.load().subscribe();
         
        }
        this.postData.sendFavorites().catch((error) => {
          console.log("Something went wrong:", error);
        });
      });
    setTimeout(this.task.bind(this), 300000);
  }
  processData(data: any) {
    return new Date(data.text());
  }

}
