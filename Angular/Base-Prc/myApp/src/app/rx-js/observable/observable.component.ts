import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  a = 5
  b = 6
  public obj1: any
  public obj2: any
  constructor() {



    // const observable$ = new Observable((observer) => {

    //   observer.next(1);
    //   observer.next(2);

    //   setTimeout(()=>{
    //     observer.next(3);
    //   },2000)

    //   setTimeout(() => {
    //     observer.next(4);
    //   }, 3000);

    //   setTimeout(()=>{
    //     if(this.a!==this.b){
    //         observer.error("error")
    //     }else
    //     observer.complete();

    //   },5000)
    // });

    // without timeout 
    const observable$ = new Observable((observer) => {

      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      if (11>11) observer.error("error") 
      else observer.complete();
      
    });
    console.log('before any one subscripe');

    //  1st subscriber 
    this.obj1 = observable$.subscribe({
      next(x) {
        console.log(`${x}-obj1`)
      },
      error(error) {
        console.log(error)
      },
      complete() {
        console.log('completed');

      }
    });

    this.obj2 = observable$.subscribe({


    })


  }

  ngOnInit(): void {

  }


}
