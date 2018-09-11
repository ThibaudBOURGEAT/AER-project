import { Component } from '@angular/core';

/**
 * Generated class for the ComiteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'comite',
  templateUrl: 'comite.html'
})
export class ComiteComponent {

  text: string;

  constructor() {
    console.log('Hello ComiteComponent Component');
    this.text = 'Hello World';
  }

}
