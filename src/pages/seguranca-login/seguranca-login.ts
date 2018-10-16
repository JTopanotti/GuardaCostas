import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-seguranca-login',
  templateUrl: 'seguranca-login.html',
})
export class SegurancaLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  voltarLogin(){
    this.navCtrl.pop();
  }

}
