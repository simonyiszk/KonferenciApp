import { Component } from '@angular/core';

/**
 * Generated class for the ExpoListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'expo-list-item',
  templateUrl: 'expo-list-item.html'
})
export class ExpoListItemComponent {

  text: string;

  constructor() {
    console.log('Hello ExpoListItemComponent Component');
    this.text = 'Hello World';
  }

}
