import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cliente-login',
  templateUrl: 'cliente-login.html',
})
export class ClienteLoginPage {

  usuario = {
    username: "",
    password: ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  voltarLogin(){
    this.navCtrl.pop();
  }

}
