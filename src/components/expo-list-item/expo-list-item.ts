import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  @Input('expo') expo: any;
  @Output() openExpo = new EventEmitter();

  constructor() {
  }

  expoClicked(){
    this.openExpo.emit(this.expo);
  }
}
