import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http'
import { MyApp } from './app.component';

import { Backend } from '../services/backend';
import { ClienteService } from '../services/cliente.service';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ClienteLoginPage } from '../pages/cliente-login/cliente-login';
import { SegurancaLoginPage } from '../pages/seguranca-login/seguranca-login';
import { ClienteCadastroPage } from '../pages/cliente-cadastro/cliente-cadastro';
import { SegurancaCadastroPage } from '../pages/seguranca-cadastro/seguranca-cadastro';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ClienteLoginPage,
    SegurancaLoginPage,
    ClienteCadastroPage,
    SegurancaCadastroPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ClienteLoginPage,
    SegurancaLoginPage,
    ClienteCadastroPage,
    SegurancaCadastroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Backend,
    ClienteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
