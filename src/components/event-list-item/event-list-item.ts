import { Component, Input } from '@angular/core';

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

  @Input('presentation') presentation: any;

  constructor() {
  }
  formattedTime():string {
    const times = this.presentation.time.split('-');
    console.log(times);
    return (
      `<div>${times[0]}</div>
      <div>${times[1]}</div>`
    )
  }
}
