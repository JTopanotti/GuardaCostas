import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SegurancaCadastroPage } from './seguranca-cadastro';

@NgModule({
  declarations: [
    SegurancaCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(SegurancaCadastroPage),
  ],
})
export class SegurancaCadastroPageModule {}
