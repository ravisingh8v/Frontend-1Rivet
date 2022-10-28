import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public icon: string
  public type: string
  public form: FormGroup


  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private UserService: UserApiService
  ) {
    this.icon = 'eye-slash';
    this.type = 'password';
    // this.loginData = '';
    this.form = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: [''],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['user']
    })

  };

  ngOnInit(): void {
  }
  onEyeClick() {
    if (this.icon === 'eye-slash') {
      this.icon = 'eye';
      this.type = 'text';
    } else {
      this.icon = 'eye-slash';
      this.type = 'password';
    }
  }
  onSignUp() {
    if (this.form.valid) {
      this.UserService.postData(this.form.value).subscribe(res => {
        this.onReset();
        this.route.navigate(['login'])
        console.log(this.form.value);
        console.log('clicked');
      })
    }

  }
  onReset() {
    this.form.reset()
  }
}
