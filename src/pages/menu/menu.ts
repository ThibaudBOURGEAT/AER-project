import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { WhoAreWePage } from '../../pages/who-are-we/who-are-we';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  homePage:any = HomePage;
  whoAreWePage:any = WhoAreWePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushPage(Page){
    this.navCtrl.push(Page);
  }

  popView(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
