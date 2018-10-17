import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteService } from '../../services/cliente.service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private service: ClienteService) {
      this.service.listClientes().subscribe(data => {
        console.log(data.json());
      });
    }

  voltarLogin(){
    this.navCtrl.pop();
  }

}
