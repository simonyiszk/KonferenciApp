import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';

@Component({
    selector: 'facebook-checkin',
    templateUrl: 'facebook-checkin.component.html'
})
export class FaceBookCheckInComponent {

    private error: string = "";
    private cathError = false;

    constructor(public navCtrl: NavController) {

    }

    shareClick() {
        SocialSharing.shareViaFacebookWithPasteMessageHint("message", null).then((result) => {
            this.cathError = false;
        }).catch((ex) => {
            this.cathError = true;
            this.error = "Sharing failed with message: " + ex;
        });
    }
}
