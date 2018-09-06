import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TopicalityProvider } from '../../providers/topicality/topicality';

@Component({
  selector: 'page-topicality',
  templateUrl: 'topicality.html',
})
export class TopicalityPage {

  news: any;
  imgs: any[];

  constructor(public navCtrl: NavController, public api: TopicalityProvider) {
    this.getNews()
    .then(this.getPictures);
  }

  popView(){
      this.navCtrl.pop();
   }

   getNews(){
        this.api.getNews()
        .then(data => {
          this.news = data;
          console.log(this.news);
        });
    }

    getPictures(){

    }
}
