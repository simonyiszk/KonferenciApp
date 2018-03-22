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

  constructor(public userData: UserProvider) {
  }
  formattedTime():string {
    const times = this.presentation.time.split('-');
    return (
      `<div>${times[0]}</div>
      <div>${times[1]}</div>`
    )
  }
  presentationClicked(){
    if(this.presentation.break != 1)
      this.openPresentation.emit(this.presentation);
  }
  favoriteClicked(){
    if(this.presentation.break != 1)
      this.makeItFavorite.emit(this.presentation.id);
  }
  isFavorite():string{
    return this.userData.isFavorite(this.presentation.id) ? "ios-heart" : "ios-heart-outline";
  }
}
