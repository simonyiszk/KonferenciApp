import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataService } from '../data.service';

@Component({
    selector: 'ask-question',
    templateUrl: 'ask-question.component.html'
})
export class AskQuestionComponent {

    @Input() pid;
    private name: string;
    private question: string;

    constructor(public toastCtrl: ToastController, public navCtrl: NavController, private dataService: DataService) {

    }

    sendQuestion() {
      if(this.name !== undefined && this.question !== undefined && this.name !== "" && this.question !== "") {
        this.dataService.setQuestion(this.pid, this.name, this.question);
        this.name = "";
        this.question = "";
        this.presentToast("Sikeres kérdésfeltétel!");
      } else {
        this.presentToast("Minden mező kitöltése kötelező!");
      }
    }

    presentToast(text: string) {
      let toast = this.toastCtrl.create({
        message: text,
        duration: 3000
      });
      toast.present();
    }
}
