import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the ClienteCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente-cadastro',
  templateUrl: 'cliente-cadastro.html',
})
export class ClienteCadastroPage {

  private validator: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.validator = this.formBuilder.group({
      nomeCliente: ['', Validators.required],
      telefoneCliente: ['', Validators.required],
      emailCliente: ['', Validators.required],
      dataNascimentoCliente: ['', Validators.required],
      usernameCliente: ['', Validators.required],
      senhaCliente: ['', Validators.required],
      confirmarSenhaCliente: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClienteCadastroPage');
  }

  cadastrarForm(){
    console.log(this.validator.value);
  }

}
