import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { TopicalityProvider } from '../providers/topicality/topicality';
import { DatePipe } from '@angular/common';

import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WhoAreWePage } from '../pages/who-are-we/who-are-we';
import { MenuPage } from '../pages/menu/menu';
import { InformationsPage } from '../pages/informations/informations';
import { TopicalityPage } from '../pages/topicality/topicality';
import { CongressPage } from '../pages/congress/congress';
import { NewPage } from '../pages/new/new';
import { ComiteComponent } from '../components/comite/comite';
import { ContactPage } from '../pages/contact/contact';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WhoAreWePage,
    MenuPage,
    InformationsPage,
    TopicalityPage,
    CongressPage,
    ComiteComponent,
    NewPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WhoAreWePage,
    MenuPage,
    InformationsPage,
    TopicalityPage,
    CongressPage,
    ComiteComponent,
    NewPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TopicalityProvider,
    DatePipe,
    File,
    FileTransfer,
    DocumentViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
