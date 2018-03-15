import { Component } from '@angular/core';

/**
 * Generated class for the InfoProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'info-profile',
  templateUrl: 'info-profile.html'
})
export class InfoProfileComponent {

  text: string;

  constructor() {
    console.log('Hello InfoProfileComponent Component');
    this.text = 'Hello World';
  }

}
