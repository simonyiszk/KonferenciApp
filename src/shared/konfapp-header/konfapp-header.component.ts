import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
    selector: 'konfapp-header',
    templateUrl: 'konfapp-header.component.html'
})

export class KonfappHeaderComponent {

    private isios = false;

    constructor(public platform: Platform) {
        if (platform.is("cordova")) {
            if (platform.is("ios")) {
                this.isios = true;
            }
        }
    }
}
