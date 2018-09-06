import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-congress',
  templateUrl: 'congress.html',
})
export class CongressPage {

  constructor(public navCtrl: NavController) {
  }

  popView(){
     this.navCtrl.pop();
   }
}
