import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CongressPage } from '../../pages/congress/congress';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushCongressPage(){
    this.navCtrl.pop();
    this.navCtrl.push(CongressPage);
  }
}
