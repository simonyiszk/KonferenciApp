import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { InfoProfileComponent } from './info-profile/info-profile';
import { MainButtonComponent } from './main-button/main-button';
import { EventListItemComponent } from './event-list-item/event-list-item';
import { ExpoListItemComponent } from './expo-list-item/expo-list-item';
@NgModule({
	declarations: [InfoProfileComponent,
    MainButtonComponent,
    EventListItemComponent,
    ExpoListItemComponent],
	imports: [IonicModule],
	exports: [InfoProfileComponent,
    MainButtonComponent,
    EventListItemComponent,
    ExpoListItemComponent]
})
export class ComponentsModule {}
