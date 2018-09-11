import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TopicalityProvider } from '../../providers/topicality/topicality';

@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {

  params: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: TopicalityProvider) {
    this.params = this.navParams.get('id');
    this.getNew();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }

  getNew(){
      this.api.getNew(this.navParams.get('id'))
      .then(data => {
        this.news = data;
        console.log(data);
      });
  }
}
