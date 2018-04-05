import { Platform } from "ionic-angular";
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Device } from '@ionic-native/device';

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {

  deviceUUID: any;
  devicePlatform: any;
  deviceVersion: any;

  constructor(public device: Device, public http: Http, public platform: Platform) {
    if (platform.is("cordova")) {
      this.deviceUUID = device.uuid;
      this.devicePlatform = device.platform;
      this.deviceVersion = device.version;
    }
    else {
      this.deviceUUID = 1;
      this.devicePlatform = "Platform";
      this.deviceVersion = "1.0";
    }
  }

  sendReport(msg: string) {
    let headers = new Headers(
      {
        'Content-Type': 'application/json'
      });
    let options = new RequestOptions({ headers: headers });

    let data = JSON.stringify({
      deviceID: this.deviceUUID,
      platform: this.devicePlatform,
      version: this.deviceVersion,
      message: msg
    });

    return this.http.post('http://192.168.0.104:8080/favorites', data, options).toPromise();
  }

}
