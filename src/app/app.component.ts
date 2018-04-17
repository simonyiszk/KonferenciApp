import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, app: App, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleLightContent();
        if (platform.is("android")) {
          statusBar.backgroundColorByHexString("#42162C");
        }
      splashScreen.hide();

      platform.registerBackButtonAction(() => {
        let nav = app.getActiveNav();
        nav.parent.select(0);
      });
    });
  }
}
