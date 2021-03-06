import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WhoAreWePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-who-are-we',
  templateUrl: 'who-are-we.html',
})
export class WhoAreWePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  popView(){
     this.navCtrl.pop();
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhoAreWePage');
  }

}
