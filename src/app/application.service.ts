import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private application;

  constructor() { }

  setApplication(application){
    this.application = application;
  }

  getApplication(){
    return this.application;
  }
}
