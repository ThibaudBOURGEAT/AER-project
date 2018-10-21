import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhoAreWePage } from './who-are-we';

@NgModule({
  declarations: [
    WhoAreWePage,
  ],
  imports: [
    IonicPageModule.forChild(WhoAreWePage),
  ],
})
export class WhoAreWePageModule {}
