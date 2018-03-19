import { Component, HostListener } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { InformationProvider } from '../../providers/information/information';

@Component({
  selector: 'page-information',
  templateUrl: 'information.html'
})
export class InformationPage {

  data: any = {};

  constructor(public infoData: InformationProvider, public platform: Platform, public navCtrl: NavController) {
    infoData.load().subscribe(data => {
      this.data = data;
      console.log(data);
    });
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
