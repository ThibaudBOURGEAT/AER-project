import { Component } from '@angular/core';
import { HomePage } from '../pages/home/home';
import { WhoAreWePage } from '../pages/who-are-we/who-are-we';

@Component(
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
class NavController {
  // set the rootPage to the first page we want displayed
  public rootPage: any = HomePage;

  constructor(){
  }
}
