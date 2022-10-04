import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, PatternValidator } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  // public form:FormGroup
  isSubmit: boolean
  form: FormGroup

  constructor(
    public formBuild: FormBuilder
  ) {

    this.isSubmit = false

    this.form = this.formBuild.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      address: this.formBuild.group({
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zip: ['', [Validators.required]]

      }),
    })
  }

  get registerForm() {
    return this.form.controls;
  }

  // get adrress(){

  // }
  ngOnInit(): void {
  }
  onSubmit() {
    this.isSubmit = true
    console.log(this.form);


  }
}
