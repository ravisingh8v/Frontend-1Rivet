import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class AuthService {

  /**
   * why we have to use subject here
   */


  public loginUserBSubject: BehaviorSubject<boolean>
  constructor() {
    this.loginUserBSubject = new BehaviorSubject(true)
  }

  /**
   * 
   * @returns true or false for authorized user
   */
  loginAuthentication() {
    let isAuthenticated = localStorage.getItem('isAuth')
    if (isAuthenticated === 'true') {
      this.loginUserBSubject.next(true);
      return true;

    } else {
      this.loginUserBSubject.next(false);
      return false;
    }

  }
}
