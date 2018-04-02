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
    infoData.get().subscribe(data => {
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
    let height;
    if (window.matchMedia("(max-width: 370px)").matches) {
      height = 109;
    } else {
      height = 55
    }
    const hStr = height + "rem";
    document.getElementById("svg").setAttribute('height', hStr);

    const platWidth = width / 10;
    const r = (platWidth * platWidth / 40 + 2.5);
    const rStr = r + "rem";
    document.getElementById("svgcircle").setAttribute('r', rStr);

    const yStr = (r + height-5) + "rem";
    document.getElementById("svgcircle").setAttribute('cy', yStr);
  }
}
