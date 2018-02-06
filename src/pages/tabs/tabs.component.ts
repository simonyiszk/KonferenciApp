import { Component } from '@angular/core';

import { TimetablePageComponent } from '../timetable-page/timetable-page.component';
import { ContactPageComponent } from '../contact-page/contact-page.component';
import { ExpoPageComponent } from '../expo-page/expo-page.component';
import { GamePageComponent } from '../game-page/game-page.component';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  templateUrl: 'tabs.component.html'
})
export class TabsPageComponent {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  mainPage: any = MainPageComponent;
  timetablePage: any = TimetablePageComponent;
  expoPage: any = ExpoPageComponent;
  gamePage: any = GamePageComponent;
  contactPage: any = ContactPageComponent;

  constructor() {

  }
}
