import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/users/user-api.service';
import { userModel } from '../user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public icon: any;
  public type: string;
  public loginData: any;
  public form: FormGroup;


  /**
   * 
   * @param route 
   */
  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private loginUserService: UserApiService
  ) {
    this.icon = 'eye-slash';
    this.type = 'password';
    // this.loginData = '';
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  };

  /**
   * password hide and show feature 
   */
  onEyeClick() {
    if (this.icon === 'eye-slash') {
      this.icon = 'eye';
      this.type = 'text';
    } else {
      this.icon = 'eye-slash';
      this.type = 'password';
    }
  };
  /**
   * after login check authorized user
   */

  onLogin() {
    this.loginUserService.getData().subscribe((res: userModel[]) => {
      let userData = res.find((user: userModel) => (user.username === this.form.value.username) && (user.password === this.form.value.password))
      if (userData) {
        localStorage.setItem('isAuth', 'true');
        this.route.navigate(['home'])
        // alert('success')
      } else {
        console.warn('wrong');
        alert('Your Credential is Wrong')
      }


    })


  }

  ngOnInit(): void {

  };

};
