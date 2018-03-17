import { Component, Input, Output, EventEmitter } from '@angular/core';

import { UserProvider } from '../../providers/user/user';
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
  @Output() openPresentation = new EventEmitter();
  @Output() makeItFavorite = new EventEmitter();

  constructor(public user: UserProvider) {
  }
  formattedTime():string {
    const times = this.presentation.time.split('-');
    return (
      `<div>${times[0]}</div>
      <div>${times[1]}</div>`
    )
  }
  presentationClicked(){
    this.openPresentation.emit(this.presentation);
  }
  favoriteClicked(){
    this.makeItFavorite.emit(this.presentation.id);
  }
  isFavorite():string{
    return this.user.isFavorite(this.presentation.id) ? "ios-heart" : "ios-heart-outline";
  }
}
