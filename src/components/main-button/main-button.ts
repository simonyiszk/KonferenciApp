import { Component } from '@angular/core';

/**
 * Generated class for the MainButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'main-button',
  templateUrl: 'main-button.html'
})
export class MainButtonComponent {

  text: string;

  constructor() {
    console.log('Hello MainButtonComponent Component');
    this.text = 'Hello World';
  }

}
