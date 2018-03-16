import { Component } from '@angular/core';

/**
 * Generated class for the EventListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'event-list-item',
  templateUrl: 'event-list-item.html'
})
export class EventListItemComponent {

  text: string;

  constructor() {
    console.log('Hello EventListItemComponent Component');
    this.text = 'Hello World';
  }

}
