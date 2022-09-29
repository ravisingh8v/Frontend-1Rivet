import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  public subject: Subject<any>
  subs1: any
  constructor() {
    this.subject = new Subject()
  }

  ngOnInit(): void {


    // this msg not print because this is above subsription and before subscribing it will not print in only subject method
    this.subject.next('notification1');


    this.subs1 = this.subject.subscribe({
      next: (n) => {
        console.log('subscriber 1:' + n)
      },
      error: (e) => {
        console.log('subscriber 1:' + e)
      },
      complete: () => {
        console.log('subscriber 1: Completed')
      }
    });

    this.subject.next("notification 2");


    

  }

}
