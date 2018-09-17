import { Component, ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Content } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';

@Component({
  selector: 'page-congress',
  templateUrl: 'congress.html',
})
export class CongressPage {

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController) {
  }

  popView(){
     this.navCtrl.pop();
   }

  scrollToTop() {
    this.content.scrollToTop();
  }


   public display(id:string):void{
      if(id == 'n1'){
        (<HTMLElement>document.getElementById("n1")).style.display = "block";
        (<HTMLElement>document.getElementById("1")).style.background = "#4572be";
        (<HTMLElement>document.getElementById("n2")).style.display = "none";
        (<HTMLElement>document.getElementById("2")).style.background = "#003590";
        (<HTMLElement>document.getElementById("n3")).style.display = "none";
        (<HTMLElement>document.getElementById("3")).style.background = "#17b55e";
        (<HTMLElement>document.getElementById("n4")).style.display = "none";
        (<HTMLElement>document.getElementById("4")).style.background = "#17b55e";
      }

     if(id == 'n2'){
       (<HTMLElement>document.getElementById("n2")).style.display = "block";
       (<HTMLElement>document.getElementById("2")).style.background = "#4572be";
       (<HTMLElement>document.getElementById("n1")).style.display = "none";
       (<HTMLElement>document.getElementById("1")).style.background = "#003590";
       (<HTMLElement>document.getElementById("n3")).style.display = "none";
       (<HTMLElement>document.getElementById("3")).style.background = "#17b55e";
       (<HTMLElement>document.getElementById("n4")).style.display = "none";
       (<HTMLElement>document.getElementById("4")).style.background = "#17b55e";
     }

     if(id == 'n3'){
       (<HTMLElement>document.getElementById("n3")).style.display = "block";
       (<HTMLElement>document.getElementById("3")).style.background = "#74d39e";
       (<HTMLElement>document.getElementById("n2")).style.display = "none";
       (<HTMLElement>document.getElementById("2")).style.background = "#003590";
       (<HTMLElement>document.getElementById("n1")).style.display = "none";
       (<HTMLElement>document.getElementById("1")).style.background = "#003590";
       (<HTMLElement>document.getElementById("n4")).style.display = "none";
       (<HTMLElement>document.getElementById("4")).style.background = "#17b55e";
     }

     if(id == 'n4'){
       (<HTMLElement>document.getElementById("n4")).style.display = "block";
       (<HTMLElement>document.getElementById("4")).style.background = "#74d39e";
       (<HTMLElement>document.getElementById("n2")).style.display = "none";
       (<HTMLElement>document.getElementById("2")).style.background = "#003590";
       (<HTMLElement>document.getElementById("n3")).style.display = "none";
       (<HTMLElement>document.getElementById("3")).style.background = "#17b55e";
       (<HTMLElement>document.getElementById("n1")).style.display = "none";
       (<HTMLElement>document.getElementById("1")).style.background = "#003590";
     }
   }
}
