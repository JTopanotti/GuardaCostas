import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteLoginPage } from './cliente-login';

@NgModule({
  declarations: [
    ClienteLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteLoginPage),
  ],
})
export class ClienteLoginModule {}
