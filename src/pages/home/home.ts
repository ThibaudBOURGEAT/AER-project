import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { PAGES } from '../menu/listMenu';
import { CongressPage } from '../../pages/congress/congress';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // Pages:any = PAGES;

  constructor(public navCtrl: NavController) {

  }

  popView(){
     this.navCtrl.pop();
   }

  goToCongres(){
    this.navCtrl.push(CongressPage);
  }
}
