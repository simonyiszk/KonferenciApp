import { NgModule } from '@angular/core';
import { InfoProfileComponent } from './info-profile/info-profile';
import { MainButtonComponent } from './main-button/main-button';
@NgModule({
	declarations: [InfoProfileComponent,
    MainButtonComponent],
	imports: [],
	exports: [InfoProfileComponent,
    MainButtonComponent]
})
export class ComponentsModule {}
