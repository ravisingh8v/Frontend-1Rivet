import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {

  subject:BehaviorSubject<any>
  subs1:any
  subs2:any
  constructor() { 
    this.subject= new BehaviorSubject('-notification 0')
  }

  ngOnInit(): void {

    // in behaviour subject we can access the last emitted value when we subscribe or the initial value for the 1st subscriber if he not have any emit value above

this.subs1=this.subject.subscribe({

  next: (n) => {
    console.log('bsubscriber 1:' + n)
  },
  error: (e) => {
    console.log('bsubscriber 1:' + e)
  },
  complete: () => {
    console.log('bsubscriber 1: Completed')
  }

})
this.subject.next('-notification 1')
this.subject.next('-notification 2')



// sub2 
// in behaviour subject we can access the last emitted value when we subscribe
this.subs2=this.subject.subscribe({

  next: (n) => {
    console.log('bsubscriber 2:' + n)
  },
  error: (e) => {
    console.log('bsubscriber 2:' + e)
  },
  complete: () => {
    console.log('bsubscriber 2: Completed')
  }

})
  }

}
