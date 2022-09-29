import { Injectable } from '@angular/core';

@Injectable()
export class CommonServicesService {


  constructor() { }

  print(data: any, elemId: any) {
    let el = document.createElement('li');
    el.innerHTML = data;
    document.getElementById(elemId)?.appendChild(el)
  }

  send(){
    
  }
}
