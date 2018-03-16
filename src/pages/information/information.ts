import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-information',
  templateUrl: 'information.html'
})
export class InformationPage {

  data: any = [];

  constructor(public http: Http, public navCtrl: NavController) {
    this.loadData();
  }

  loadData(){
    //this.file.readAsText(this.file.applicationDirectory + "www/assets", "data.json").then(...)
    this.http.get('../../assets/data/organizers.json')
    .map(res => res.json())
    .subscribe(data => {
      this.data = data;
      //console.log(data);
    });
    /** TODO: Add img key */
    /*this.data = JSON.parse(`[  
      {  
         "name":"Tóth Bence",
         "title":"Főrendező",
         "email":"toth.bence@simonyi.bme.hu",
         "phone":"+36 30 961 5767"
      },
      {  
         "name":"Kiss Dávid",
         "title":"Simonyi Károly Szakkollégium, Elnök",
         "email":"kiss.david@simonyi.bme.hu",
         "phone":"+36 30 647 2610"
      },
      {  
         "name":"Vegera Tamás",
         "title":"Sajtófelelős",
         "email":"vegera.tamas@simonyi.bme.hu",
         "phone":"+36 ‭70 413 5912"
      }
   ]`);*/
   //console.log(this.data);
  }
}
