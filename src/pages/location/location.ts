import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google: any;

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  @ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap(){
    const location = new google.maps.LatLng(47.472666, 19.059949);

    const option = {
      center: location,
      zoom: 13
    }

    const map = new google.maps.Map(this.mapRef.nativeElement, option);

    this.addMarker(location, map);
  }
  addMarker(position, map){
    return new google.maps.Marker({
      position,
      map
    })
  }
}
