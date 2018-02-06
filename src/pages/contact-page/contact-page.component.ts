import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
    selector: 'contact-page',
    templateUrl: 'contact-page.component.html'
})
export class ContactPageComponent {

    private isAndroid: boolean;

    constructor(public platform: Platform) {
        if (platform.is("cordova")) {
          if (platform.is("android")) {
              this.isAndroid = true;
          }
      }
    }
}
