import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClienteLoginPage } from '../cliente-login/cliente-login';
import { SegurancaLoginPage } from '../seguranca-login/seguranca-login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  clienteLogin(){
    this.navCtrl.push(ClienteLoginPage);
  }

  segurancaLogin(){
    this.navCtrl.push(SegurancaLoginPage);
  }


}
