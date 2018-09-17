import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PAGES } from './listMenu';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  Pages:any = PAGES;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushPage(Page){
    this.navCtrl.push(Page);
  }

  popView(){
    this.navCtrl.pop();
  }
}
