import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { city, country, state } from './model/filter.model';
import { ScServiceService } from './service/sc-service.service';
@Component({
  selector: 'app-dependent-dropdown',
  templateUrl: './dependent-dropdown.component.html',
  styleUrls: ['./dependent-dropdown.component.scss']
})
export class DependentDropdownComponent implements OnInit {
  public form: FormGroup;

  public countries: country[] = [];
  public states: state[] = [];
  public cities: city[] = [];

  public statesData?: any;
  public citiesData?: any;

  constructor(public fb: FormBuilder,
    private scService: ScServiceService) {
    this.form = this.fb.group({
      country: [''],
      state: [''],
      city: ['']
    })
    this.form.controls['state']?.disable()
    this.form.controls['city']?.disable()
  }

  ngOnInit(): void {
    this.getCountry()
    this.getState()
    this.getCity()
  }

  getCountry() {
    this.scService.getCountries().subscribe((res: country[]) => this.countries = res)

  }
  getState() {
    this.scService.getStates().subscribe((res: state[]) => this.states = res)
  }
  getCity() {
    this.scService.getCity().subscribe((res: city[]) => { this.cities = res })
  }



  onChangeCountry(countryId: any) {
    // console.log(this.states);
    const Id = countryId.target.value;
    if (Id) {
      this.statesData = this.states.filter((res) => Id == res.countryId);
      console.log(this.statesData);
      this.form.controls['state']?.enable()
    }

  }
  onChangeState(stateId: any) {
    const Id = stateId.target.value;
    if (Id) {
      this.citiesData = this.cities.filter((res) => Id == res.stateId);
      console.log(this.citiesData);
      this.form.controls['city']?.enable()

    }
  }


}
