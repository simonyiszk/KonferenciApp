import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule }    from '@angular/http';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';

/************ Shared ***************/
import { FaceBookCheckInComponent } from '../shared/facebook-checkin/facebook-checkin.component';
import { AskQuestionComponent } from '../shared/ask-question/ask-question.component';
import { KonfappHeaderComponent } from '../shared/konfapp-header/konfapp-header.component';

/************ Pages ****************/
import { TimetablePageComponent } from '../pages/timetable-page/timetable-page.component';
import { ProgramDetailPageComponent } from '../pages/program-detail-page/program-detail-page.component';
import { MapPageComponent } from '../pages/map-page/map-page.component';
import { ContactPageComponent } from '../pages/contact-page/contact-page.component';
import { ExpoPageComponent } from '../pages/expo-page/expo-page.component';
import { GamePageComponent } from '../pages/game-page/game-page.component';
import { MainPageComponent } from '../pages/main-page/main-page.component';

import { TabsPageComponent } from '../pages/tabs/tabs.component';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'eb1ed9b3'
  },
  'push': {
    'sender_id': '882522789461',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    TimetablePageComponent,
    ProgramDetailPageComponent,
    MapPageComponent,
    ContactPageComponent,
    ExpoPageComponent,
    GamePageComponent,
    FaceBookCheckInComponent,
    KonfappHeaderComponent,
    TabsPageComponent,
    MainPageComponent,
    AskQuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
            backButtonText: 'Vissza'
        },
    ),
    CloudModule.forRoot(cloudSettings),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TimetablePageComponent,
    ProgramDetailPageComponent,
    MapPageComponent,
    ContactPageComponent,
    ExpoPageComponent,
    GamePageComponent,
    FaceBookCheckInComponent,
    KonfappHeaderComponent,
    TabsPageComponent,
    MainPageComponent,
    AskQuestionComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
