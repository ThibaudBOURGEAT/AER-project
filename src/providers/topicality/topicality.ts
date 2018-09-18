import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class TopicalityProvider {

  constructor(private http: HttpClient, private alertCtrl: AlertController) {

  }

  getNews(){
    return new Promise(resolve => {
      this.http.get('https://aer-congres.com/wp-json/wp/v2/posts?filter[orderby]=date&order=desc&per_page=10').subscribe(data => {
        resolve(data);
      }, err => {
        const alert = this.alertCtrl.create({
         title: 'Erreur !',
         subTitle: 'Impossible de récuperer les actualités!',
         buttons: ['OK']
       });
       alert.present();
      });
    });
  }

  getNew(id){
    return new Promise(resolve => {
      this.http.get('https://aer-congres.com/wp-json/wp/v2/posts/' + id).subscribe(data => {
        resolve(data);
      }, err => {
        const alert = this.alertCtrl.create({
         title: 'Erreur !',
         subTitle: 'Impossible de récuperer l\'article!',
         buttons: ['OK']
       });
       alert.present();
      });
    });
  }

  getPicture(id){
    return new Promise(resolve => {
      this.http.get('https://aer-congres.com/wp-json/wp/v2/media/' + id).subscribe(data => {
        resolve(data);
      }, err => {
        const alert = this.alertCtrl.create({
         title: 'Erreur !',
         subTitle: 'Impossible de récuperer l\'image!',
         buttons: ['OK']
       });
       alert.present();
      });
    });
  }

}
