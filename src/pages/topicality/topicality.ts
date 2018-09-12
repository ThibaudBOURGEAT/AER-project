import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TopicalityProvider } from '../../providers/topicality/topicality';
import { NewPage } from '../../pages/new/new';

@Component({
  selector: 'page-topicality',
  templateUrl: 'topicality.html',
})
export class TopicalityPage {

  news: any;
  imgs: any[];

  constructor(public navCtrl: NavController, public api: TopicalityProvider) {
    this.getPictures();
    this.getNews();
  }

  popView(){
      this.navCtrl.pop();
   }

   getNews(){
        this.api.getNews()
        .then(data => {
          this.news = data;
        });
    }

   getPictures(){
      this.api.getNews()
      .then(data => {
        var pictures = new Array(data['length']);
        for(let i in data){
          this.api.getPicture(data[i].featured_media)
          .then(data => {
            pictures[i] = data['guid'].rendered;
          });
        }
        this.imgs = pictures;
      });
    }

    pushPage(idNew){
      this.navCtrl.push(NewPage, {id: idNew});
    }
}
