"use strict";




setTimeout(() => {
    a=10;
    console.log("hello")
    }, 4000);


setTimeout(() => {
    for (let i = 0; i < 48; i++) {
        const element = i;

       console.log("a "+element);
    }
console.log("last this");

}, 5000);

console.log("first print this");


    // setTimeout(() => {
        
    //     a = 10;
    //     console.log(a);
    // }, 2000);
    
    // setTimeout(() => {
        
    //     for (let i = 0; i < 48; i++) {
    //         const element = i;
        
    //         console.log("a " + element);
    //     }
    // }, 1000);
    
    
    
    // console.log("first print this");