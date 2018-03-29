import { Component } from '@angular/core';
import { Platform, App, ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { PresentationProvider } from '../providers/presentation/presentation';
import { UserProvider } from '../providers/user/user';
import { InformationProvider } from '../providers/information/information';
import { ExpoProvider } from '../providers/expo/expo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(expoData: ExpoProvider, infoData: InformationProvider, userData: UserProvider, presData: PresentationProvider, app: App, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      platform.registerBackButtonAction(() => {
        let nav = app.getActiveNav();
        
        let activeView: ViewController = nav.getActive();
    
        if(nav.canGoBack()){
          nav.pop();
        }
        else if(activeView.component.name=="HomePage"){
          platform.exitApp();
        }else{
          nav.parent.select(0);
        }
      });
    });
    presData.get().subscribe();
    infoData.get().subscribe();
    expoData.get().subscribe();
  }
}
