import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ProgramPage } from '../pages/program/program';
import { ExpoPage } from '../pages/expo/expo';
import { InformationPage } from '../pages/information/information';
import { TabsPage } from '../pages/tabs/tabs';
import { LocationPage } from '../pages/location/location';
import { GamePage } from '../pages/game/game';
import { PresentationDetailsPage } from '../pages/presentation-details/presentation-details';

import { ComponentsModule } from '../components/components.module';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PresentationProvider } from '../providers/presentation/presentation';
import { UserProvider } from '../providers/user/user';
import { InformationProvider } from '../providers/information/information';

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
    PresentationDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ComponentsModule,
    HttpModule
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
    PresentationDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PresentationProvider,
    UserProvider,
    InformationProvider
  ]
})
export class AppModule {}
