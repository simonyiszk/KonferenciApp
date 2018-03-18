import { Component, HostListener } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-information',
  templateUrl: 'information.html'
})
export class InformationPage {

  data: any = {};

  constructor(public http: Http, public platform: Platform, public navCtrl: NavController) {
    this.loadData();
  }

  loadData() {
    this.http.get('../../assets/data/information.json')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        console.log(data);
      });
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
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeCircle(event.target.innerWidth);
  }

  ionViewDidLoad() {
    this.resizeCircle(this.platform.width());
  }

  resizeCircle(width: number) {
    //(w/2)^2/10 + 2,5 = r
    const platWidth = width / 10;
    const h = (platWidth * platWidth / 40 + 2.5);
    const rStr = h + "rem";
    document.getElementById("svgcircle").setAttribute('r', rStr);

    const yStr = (h + 50) + "rem";
    document.getElementById("svgcircle").setAttribute('cy', yStr);
  }
}
