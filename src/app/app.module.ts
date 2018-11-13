import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { DatePipe } from '@angular/common';
import { EmailComposer } from '@ionic-native/email-composer';

import { Push } from '@ionic-native/push';

import { MyApp } from './app.component';
import { MenuPage } from '../pages/menu/menu';
import { ContactPage } from '../pages/contact/contact';
import { MapPage } from '../pages/map/map';
import { HomePage } from '../pages/home/home';
import { InformationsPage } from '../pages/informations/informations';
import { WhoAreWePage } from '../pages/who-are-we/who-are-we';
import { ComiteComponent } from '../components/comite/comite';
import { PartenaireComponent } from '../components/partenaire/partenaire';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    ContactPage,
    MapPage,
    HomePage,
    InformationsPage,
    WhoAreWePage,
    ComiteComponent,
    PartenaireComponent
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
    ContactPage,
    MapPage,
    HomePage,
    InformationsPage,
    WhoAreWePage,
    ComiteComponent,
    PartenaireComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePipe,
    EmailComposer,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
