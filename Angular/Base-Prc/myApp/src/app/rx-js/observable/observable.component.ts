import { Component, OnInit } from '@angular/core';
import { Observable, of,map ,pipe, from, concat} from 'rxjs';
import { CommonServicesService } from 'src/app/common-services.service';



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
  techStatus:string
  constructor(private createElem:CommonServicesService) {

this.techStatus=''

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
    // const observable$ = new Observable((observer) => {

      // observer.next(1);
      // observer.next(2);
      // observer.next(3);
      // observer.next(4);
      // observer.error("error") 
      // observer.complete();
      
    // });
    // console.log('before any one subscripe');

    //  1st subscriber 
    // observable$.subscribe(res=>{
    //   console.log(res)
    //   this.createElem.print(res,'list')
     
      // next(x) {
      //   console.log(`${x}-obj1`)
      // },
      // error(error) {
      //   console.log(error)
      // },
      // complete() {
      //   console.log('completed');

        
      // }
    // });

    // this.obj2 = observable$.subscribe({


    // })

  }

  ngOnInit(): void {


//OF OPERATOR ==============================================================================================

  // of(11,22,33,44,55)    
  //   .pipe(
  //     map(x=>x*2)
  //   ).subscribe({
  //     next:(x)=>{
  //       this.createElem.print(x,'list')
        
  //     }
  //   });

  


  // from operator =========================================================================================
let array1=[1,2,3,4,5];
let array2=['a','b','c','d','e'];

// from([array1,array2,'toh kese hein app log']).subscribe({next:(x)=>{
//   console.log(x);
//   this.createElem.print(x,'list')
  
// }})

// concat(array1,array2).subscribe({next:(x)=>{
//   console.log(x);
//   this.createElem.print(x,'list')
  
// }})


// of using array ===========================
// of(array1,array2,'toh kese hein aap log')    
//    .subscribe({
//       next:(x)=>{
//         this.createElem.print(x,'list')
        
//       }
//     });





  // normal observable creation  ===========================================================================
    // const observable$ = new Observable((observer) => {

    //   setTimeout(() => {
    //     observer.next(1);
    //   }, 1000);
    //   setTimeout(() => {
    //     observer.next(2);
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next(3);
    //   }, 3000);
    //   setTimeout(() => {
    //     observer.next(4);
    //   }, 4000);

    //   setTimeout(()=>{
    //     observer.error('error');
    //   },5000)

    //   setTimeout(()=>{
    //     observer.complete();
    //   },5000);
      
    // });
    // console.log('before any one subscripe');

    //  1st subscriber 
  //  this.obj1= observable$.subscribe(res=>{
  //     console.log(res)
      
      
      // this.createElem.print(res,'list')
      
     
      // next(x) {
      //   console.log(`${x}-obj1`)
      // },
      // error(error) {
      //   console.log(error)
      // },
      // complete() {
      //   console.log('completed');

        
      // }
    // },
    // (error)=>{
    //   console.log(error);
    //   this.techStatus='inComplete'
      
    // },
    // ()=>{
    //   console.log('completed')
    //   this.techStatus='complete'
    // }
    
    // );



    // sub 2 
//     this.obj2 = observable$.subscribe({
// next:(res)=>{
//   this.createElem.print(res,'list')
// },error:()=>{

// },complete:()=>{

// }

//     });





// operator 












  }



}
