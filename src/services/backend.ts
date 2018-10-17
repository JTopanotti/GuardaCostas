import { Injectable } from '@angular/core';

@Injectable()
export class Backend {
  private backendUrl: string = "https://guarda-costas-backend.herokuapp.com";

  createPath(route: string){
    return this.backendUrl + route;
  };
}
