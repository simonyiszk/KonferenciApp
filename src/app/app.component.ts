import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPageComponent } from '../pages/tabs/tabs.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = TabsPageComponent;
  public isAndroid: boolean;
  public platfooorm: string;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      StatusBar.styleLightContent();
      /*
      if(platform.is("android")) {
        //StatusBar.backgroundColorByHexString("#1e75a9");
        //StatusBar.hide();
      }
      */
      Splashscreen.hide();
    });
  }
}
