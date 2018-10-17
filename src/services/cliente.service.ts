import { Http } from '@angular/http'
import { Backend } from './backend';
import { Injectable } from '@angular/core';

@Injectable()
export class ClienteService {

  constructor(private http: Http, private backend: Backend){}

  listClientes(){
      return this.http.get(this.backend.createPath('/client/list'));
  }
}
