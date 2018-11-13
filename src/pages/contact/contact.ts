import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  youAre: String;
  name: String;
  yourEmail: String;
  subject: String;
  message: String;


  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {
  }

  body(){
    return "Profession : " + this.youAre +
    ",\nNom : " + this.name +
    ",\nEmail : " + this.yourEmail +
    ",\nSujet : " + this.subject +
    ",\nMessage : " + this.message;
  }

  send(){
    let email = {
      to: 'sylvaine.sazio@aer-congres.com',
      cc: [],
      bcc: [],
      attachment: [],
      subject: 'Contact depuis le site aer-congres.com',
      body: this.body(),
      isHtml: false
    };
    this.emailComposer.open(email);
    this.navCtrl.pop();
  }

}
