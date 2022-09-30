import { Injectable } from '@angular/core';

@Injectable()
export class CommonServicesService {


  constructor() { }

  print(data: any, elemId: any) {
    let el = document.createElement('li');
    el.innerHTML = data;
    document.getElementById(elemId)?.appendChild(el)
  }

  create(elemId:any){
    let el = document.createElement('input');
    el.type='text'
    el.placeholder='enter your name'
    el.innerHTML
    document.getElementById(elemId)?.appendChild(el)
  }
}
