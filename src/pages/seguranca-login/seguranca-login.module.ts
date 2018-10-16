import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SegurancaLoginPage } from './seguranca-login';

@NgModule({
  declarations: [
    SegurancaLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(SegurancaLoginPage),
  ],
})
export class SegurancaLoginModule {}
