import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { company } from 'src/app/company/company.model';

@Injectable()

export class CompanyCommunicationService {

  public companyDetail: Subject<company>;
  public editCompanyDetail: Subject<company>;
  public checkProfilePic: BehaviorSubject<boolean>;


  constructor() {
    this.companyDetail = new Subject;
    this.editCompanyDetail = new Subject;
    this.checkProfilePic = new BehaviorSubject(false)
  }

}
