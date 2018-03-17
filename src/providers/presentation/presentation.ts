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
    
  }

  load(): any {
    if (this.data) {
      return Observable.of(this.data);
    } else {
    return this.http.get('../../assets/data/presentations.json')
      .map(this.processData, this);
    }
  }
  processData(data: any) {
    this.data = {};
    let datatmp = data.json();
    datatmp.forEach(element => {
      this.data[element["room"]] = element["programs"];
    });
    return this.data;
  }

  filterPresentation(segment: string) {
    return this.load().map((data: any) => {
      if(segment === 'favorite'){
        //TODO
        return data["IB028"];
      }
      else {
        return data[segment];
      }
    });
  }
}
