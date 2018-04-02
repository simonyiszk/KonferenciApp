import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LocationPage } from '../pages/location/location';
import { GamePage } from '../pages/game/game';
import { ProgramPage } from '../pages/program/program';
import { PresentationDetailsPage } from '../pages/presentation-details/presentation-details';
import { ExpoPage } from '../pages/expo/expo';
import { ExpoDetailsPage } from '../pages/expo-details/expo-details';
import { InformationPage } from '../pages/information/information';
import { TabsPage } from '../pages/tabs/tabs';


import { ComponentsModule } from '../components/components.module';
import { IonicStorageModule } from '@ionic/storage';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';
import { Brightness } from '@ionic-native/brightness';

import { PresentationProvider } from '../providers/presentation/presentation';
import { UserProvider } from '../providers/user/user';
import { InformationProvider } from '../providers/information/information';
import { ExpoProvider } from '../providers/expo/expo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProgramPage,
    ExpoPage,
    InformationPage,
    TabsPage,
    LocationPage,
    GamePage,
    PresentationDetailsPage,
    ExpoDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ComponentsModule,
    HttpModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProgramPage,
    ExpoPage,
    InformationPage,
    TabsPage,
    LocationPage,
    GamePage,
    PresentationDetailsPage,
    ExpoDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OneSignal,
    Brightness,
    PresentationProvider,
    UserProvider,
    InformationProvider,
    ExpoProvider
  ]
})
export class AppModule {}
