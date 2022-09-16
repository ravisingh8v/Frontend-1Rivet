import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
    geturl="http://localhost:3000/customer";
  constructor(
    private _http:HttpClient  
  ) { 
  
  }

  public getCustomer(){
return this._http.get(this.geturl);

  }


}
