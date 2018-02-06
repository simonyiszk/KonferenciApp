import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
    selector: 'map-page',
    templateUrl: 'map-page.component.html'
})
export class MapPageComponent implements OnInit {

    map: any;
    private isAndroid: boolean;

    constructor() {

    }

    ngOnInit() {
        let mapEle = document.getElementById('map');
        this.map = new google.maps.Map(mapEle, {
            center: {lat: 47.4726258, lng: 19.0599235},
            zoom: 17
        });

        new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: {lat: 47.4726258, lng: 19.0599235}
        });

        google.maps.event.addListenerOnce(this.map, 'idle', () => {
            mapEle.classList.add('show-map');
            google.maps.event.trigger(mapEle, 'resize');
        });
    }
}
