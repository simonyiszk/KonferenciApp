import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { InfoProfileComponent } from './info-profile/info-profile';
import { MainButtonComponent } from './main-button/main-button';
@NgModule({
	declarations: [InfoProfileComponent,
    MainButtonComponent],
	imports: [IonicModule],
	exports: [InfoProfileComponent,
    MainButtonComponent]
})
export class ComponentsModule {}
