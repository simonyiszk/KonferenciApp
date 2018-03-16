import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { InfoProfileComponent } from './info-profile/info-profile';
import { MainButtonComponent } from './main-button/main-button';
import { EventListItemComponent } from './event-list-item/event-list-item';
@NgModule({
	declarations: [InfoProfileComponent,
    MainButtonComponent,
    EventListItemComponent],
	imports: [IonicModule],
	exports: [InfoProfileComponent,
    MainButtonComponent,
    EventListItemComponent]
})
export class ComponentsModule {}
