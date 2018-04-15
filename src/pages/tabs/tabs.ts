import { Component } from '@angular/core';

import { ScanPage } from '../scan/scan';
import { AdminPage } from '../admin/admin';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ScanPage;
  tab2Root = AdminPage;

  constructor() {

  }
}
