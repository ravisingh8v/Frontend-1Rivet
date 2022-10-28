import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myApp';
  public isAuth: boolean;
  constructor(private authServcie: AuthService) {
    this.isAuth = false;

  }
  /**
   * Header hide when user not autherized
   */
  ngOnInit(): void {
    this.authServcie.loginUserBSubject.subscribe(res => {
      if (res == false) {
        this.isAuth = false
      } else {
        this.isAuth = true
      }
    })

  }

  // output for hiding header 
  clicked(event: any) {
    this.isAuth = event
  }



}
