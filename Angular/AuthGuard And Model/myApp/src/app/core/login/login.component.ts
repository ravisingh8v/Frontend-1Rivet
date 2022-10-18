import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { loginUser } from './login-model';

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
    private loginUserService: ApiService
  ) {
    this.icon = 'eye-slash';
    this.type = 'password';
    // this.loginData = '';
    this.form = formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  };

  onEyeClick() {
    if (this.icon === 'eye-slash') {
      this.icon = 'eye';
      this.type = 'text';
    } else {
      this.icon = 'eye-slash';
      this.type = 'password';
    }
  };

  onLogin() {
    this.loginUserService.getData().subscribe((res: any) => {
      this.loginData = res
    })
    setTimeout(() => {
      if (this.loginData.usernames === this.form.value.username) {
        this.route.navigate(['home'])
      } else {
        alert('wrong')
      }
      console.log(this.loginData);
    }, 2000);


  }
  ngOnInit(): void {
  };

};
