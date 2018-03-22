import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

/*
  Generated class for the ExpoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExpoProvider {
  data: any;

  constructor(public http: Http) {

  }
  get(): any {
    if (this.data) {
      return Observable.of(this.data);
    } else {
      return this.load();
    }
  }
  load(): any {
    return this.http.get('http://gyromouse.net/weboldal/konferenciapi/stand.php')
      .map(res => res.json());
  }
}
