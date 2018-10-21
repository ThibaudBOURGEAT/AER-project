import { Component } from '@angular/core';

/**
 * Generated class for the PartenaireComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'partenaire',
  templateUrl: 'partenaire.html'
})
export class PartenaireComponent {

  text: string;

  constructor() {
    console.log('Hello PartenaireComponent Component');
    this.text = 'Hello World';
  }

}
