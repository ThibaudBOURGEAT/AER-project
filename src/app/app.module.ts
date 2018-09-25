import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { TopicalityProvider } from '../providers/topicality/topicality';
import { DatePipe } from '@angular/common';
import { EmailComposer } from '@ionic-native/email-composer';

import { MyApp } from './app.component';
import { WhoAreWePage } from '../pages/who-are-we/who-are-we';
import { MenuPage } from '../pages/menu/menu';
import { InformationsPage } from '../pages/informations/informations';
import { TopicalityPage } from '../pages/topicality/topicality';
import { NewPage } from '../pages/new/new';
import { ComiteComponent } from '../components/comite/comite';
import { PartenaireComponent } from '../components/partenaire/partenaire';
import { ContactPage } from '../pages/contact/contact';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { Firebase } from '@ionic-native/firebase';
import { FcmProvider } from '../providers/fcm/fcm';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const firebase = {
  apiKey: "AIzaSyALSMmT2f1UTPsctKCyQDsvwmlVmGjBzCs",
  authDomain: "aer-cong.firebaseapp.com",
  databaseURL: "https://aer-cong.firebaseio.com/",
  projectId: "aer-cong",
  storageBucket: "aer-cong.appspot.com",
  messagingSenderId: "37033292368"
}

@NgModule({
  declarations: [
    MyApp,
    WhoAreWePage,
    MenuPage,
    InformationsPage,
    TopicalityPage,
    ComiteComponent,
    NewPage,
    ContactPage,
    PartenaireComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WhoAreWePage,
    MenuPage,
    InformationsPage,
    TopicalityPage,
    ComiteComponent,
    NewPage,
    ContactPage,
    PartenaireComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TopicalityProvider,
    DatePipe,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FcmProvider,
    Firebase
  ]
})
export class AppModule {}
