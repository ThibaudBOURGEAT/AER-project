import { Component, ViewChild} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { MenuPage } from '../pages/menu/menu';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: NavController
  rootPage:any = MenuPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private push: Push) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.pushStetup();
    });
  }

  pushStetup(){
    const options: PushOptions = {
       android: {
         senderID: '104309785545'
       },
       ios: {
           alert: 'true',
           badge: true,
           sound: 'false'
       }
   };

    const pushObject: PushObject = this.push.init(options);


    pushObject.on('notification').subscribe((notification: any) => console.log('Vous avez reçu une notification', notification));

    pushObject.on('registration').subscribe((registration: any) => console.log('Appareil enregistré', registration));

    pushObject.on('error').subscribe(error => console.error('Erreur avec le plugin Push', error));
  }

}
