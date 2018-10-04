import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { TopicalityProvider } from '../providers/topicality/topicality';
import { DatePipe } from '@angular/common';
import { EmailComposer } from '@ionic-native/email-composer';

import { Push } from '@ionic-native/push';

import { MyApp } from './app.component';
import { MenuPage } from '../pages/menu/menu';
import { TopicalityPage } from '../pages/topicality/topicality';
import { NewPage } from '../pages/new/new';
import { ContactPage } from '../pages/contact/contact';
import { MapPage } from '../pages/map/map';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    TopicalityPage,
    NewPage,
    ContactPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    TopicalityPage,
    NewPage,
    ContactPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TopicalityProvider,
    DatePipe,
    EmailComposer,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
