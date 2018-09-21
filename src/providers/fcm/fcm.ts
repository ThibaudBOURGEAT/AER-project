import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';

@Injectable()
export class FcmProvider {

  constructor(public http: HttpClient) {
    
  }

}
