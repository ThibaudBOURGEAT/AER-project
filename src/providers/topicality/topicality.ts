import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TopicalityProvider {

  constructor(public http: HttpClient) {

  }

  getNews(){
    return new Promise(resolve => {
      this.http.get('https://aer-congres.com/wp-json/wp/v2/posts?filter[orderby]=date&order=desc').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
