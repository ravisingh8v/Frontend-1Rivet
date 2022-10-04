import { Conditional } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, of, map, pipe, from, concat, fromEvent, forkJoin, timer, interval, merge, take, debounceTime, filter, distinct, tap } from 'rxjs';
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
  techStatus: string
  x: any
  constructor(private createElem: CommonServicesService) {

    this.techStatus = ''
    this.x = 'Test String'
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
    let array1 = [1, 2, 3, 4, 5];
    let array2 = ['a', 'b', 'c', 'd', 'e'];

    // from([array1,array2,'hello how are you']).subscribe({next:(x)=>{
    //   console.log(x);
    //   this.createElem.print(x,'list')

    // }})

    // concat(array1,array2).subscribe({next:(x)=>{
    //   console.log(x);
    //   this.createElem.print(x,'list')

    // }})


    // of using array ===========================
    // of(array1,array2,'hello how are you')    
    //    .subscribe({
    //       next:(x)=>{
    //         this.createElem.print(x,'list')

    //       }
    //     });


    // from event 

    // const documents = document.querySelectorAll('#btn1')

    // const clicks = fromEvent(documents, 'click')

    // clicks.subscribe({
    //   next: () => {
    //     this.createElem.print(this.x, 'list')
    //   }

    // })



    // using ofrkJoin Method ================================================================================

    // const forkjoinObs = forkJoin({
    //   ofObs: of(1, 2, 3),
    //   // resolve: Promise.resolve('connected to the server'),
    //   reject: Promise.reject('not connected to the server'),
    //   Timer: timer(0)

    // })
    // forkjoinObs.subscribe({
    //   next: (x) => {
    //     console.log(x);
    //     // setTimeout(()=>{
    //       this.createElem.print(x['Timer'],'list')
    //     // },1000)
    //     // setTimeout(()=>{
    //       this.createElem.print(x['ofObs'],'list')
    //     // },2000)
    //     // setTimeout(()=>{
    //       this.createElem.print(x['reject'],'list')
    //     // },3000)


    //   },
    //   error:(x)=>{
    //     this.createElem.print(x,'list')
    //   },

    //   complete: () => {
    //     setTimeout(()=>{
    //       console.log('Fork Join Completed');
    //       this.createElem.print('Comleted','list')
    //     },4000)
    //   }
    // })


    // Merge Operator  =======================================================================================

    // take operator give data by our Condition
    // const click2 = fromEvent(documents, 'click');
    // const timer = interval(1000).pipe(take(10)); 
    // const clicksOrTimer = merge(clicks, timer);
    // clicksOrTimer.subscribe(x => this.createElem.print(x,'list'));



    // map OPerator ==========================================================================================


    // const click3 = fromEvent<PointerEvent>(document, 'click');
    // const positions = click3.pipe(map(ev => ev.clientY));

    // positions.subscribe(x => console.log(x));


    // let input = document.querySelectorAll('input')
    // const click4 = fromEvent(input, 'keydown');
    // const result = click4.pipe(debounceTime(1000)).subscribe((x) => console.log(x))

    //---------------------filter------------------------ =========================================================



    // of(1,2,3,4,5,6,7,2,6,7,5).pipe(filter(x => x !== 2 )).subscribe(x=>console.log(x));



    // ==================================================distinct===================================================

    // ex:1
    // of({age:2,name:'ramesh'},{age:3,name:'suresh'},{age:2,name:'ramesh'}).pipe(distinct()).subscribe(x=>console.log(x));


    // defination - only check single value or check via keyvalue 


    // ex:2
    // of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
    //   .pipe(distinct())
    //   .subscribe(x => console.log(x));


    // ex:3

    // const obj = of({ age: 30, names: 'Samkeet' },
    //     { age: 30, names: 'Samkeet' },
    //     { age: 30, names: 'Samkeet' },
    //     { age: 30, names: 'Samkeet' });s


    //     obj.pipe(distinct(({names}) => names)).subscribe(x => console.log(x));


    // ================================================ Tap =======================================================


    const msg = prompt('enter Number only')


    of(msg).pipe(
      tap(console.log),
      map(n => n > 4 ? 'big' : 'small')
    ).subscribe(console.log);


    // ==============================================         ====================================================



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
  onClick() {


    this.createElem.create("input")
  }


}
