import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ProgramPage } from '../program/program';
import { ExpoPage } from '../expo/expo';
import { InformationPage } from '../information/information';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProgramPage;
  tab3Root = ExpoPage;
  tab4Root = InformationPage;

  constructor() {

  }
}
