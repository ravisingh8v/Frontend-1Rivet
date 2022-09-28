import { Component, OnInit } from '@angular/core';

import { CommonServicesService } from '../common-services.service';


@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.scss']
})
export class RXJSComponent implements OnInit {

  // observe = new Observable(sub=>{

  // });

  
  constructor(private service:CommonServicesService) {
    // console.log(RX);
    // this.obs1 = this.observe.subscribe({

    //   next: (x) => {
    //     console.log(x)
    //   },
    //   error: (y) => {
    //     console.log(y)
    //   },
    //   complete: () => {
    //     console.log('completed');

    //   }
    // })

    // if (!this.observe.subscribe) {
    //   this.obs1.next(1)
    // } else (
    //   this.obs1.error('error')
    // )
    // this.obs1.complete('completed')


    
  }



  ngOnInit(): void {

  }

}
