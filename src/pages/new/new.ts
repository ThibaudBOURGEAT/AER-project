import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TopicalityProvider } from '../../providers/topicality/topicality';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {

  content: any;
  img: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: TopicalityProvider) {
    this.getNew();
  }

  getNew(){
     this.api.getNew(this.navParams.get('id'))
     .then(data => {
       this.content = data;
       console.log(typeof data['date']);
       this.api.getPicture(data['featured_media'])
       .then(data => {
           this.img = data['guid'].rendered;
       });
     });
   }
}
