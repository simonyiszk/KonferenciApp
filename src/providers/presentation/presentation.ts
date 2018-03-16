import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
/*
  Generated class for the PresentationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PresentationProvider {
  data: any;

  constructor(public http: Http) {
    console.log('Hello PresentationProvider Provider');
  }

  load(): any {
    if (this.data) {
      return Observable.of(this.data);
    } else {
      return this.http.get('../../assets/data/presentations.json')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        console.log(data);
      });
    }
  }
}
