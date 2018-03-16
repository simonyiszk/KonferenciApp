import { Component, Input } from '@angular/core';

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

  @Input('content') content;

  constructor() {
    
  }

  clicked(email:string){
    if(email)
      window.open(`mailto:${email}`, '_system');
  }
}
