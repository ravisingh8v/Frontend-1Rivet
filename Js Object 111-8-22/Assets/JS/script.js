//====================== Assign Method ====================//

// const obj1 = {"id":4}
// console.log(obj1);

// const obj2={"id":2,"name":"suraj","surname":"singh","age":18};

// assign method we use to assign value one object to another object  and override the same key properties
// Object.assign(obj1,obj2);


// Global Object 
const obj1={"id":1,"name":"Suraj","surname":"singh","age":21};

// ======================Create Method ====================// 
// console.log(obj1);
// const obj2=Object.create(obj1);

// console.log(obj2);

// obj2.id=2;
// console.log(obj2);

//==================== Define defineProperties ==========================//

// here we can define multiple properties to the empty object or any object and also modify them with the help of target to the same keys

// const obj = {};
// Object.defineProperties(obj, {
//   'Name': {
//     value: 'ravi',
//     writable: true
//   },
//   'surname': {
//     value: 'Hello',
//     writable: false}
// });
// console.log(obj)

// obj.name;




//==================== Define defineProperty ==========================//
// here we can define Single property to the empty object or any object and also modify them with the help of target to the same keys

// const obj = {"name":"samkeet"};
// console.log(obj);                    

// Object.defineProperty(obj, 
//     'name',{
//     value: 'ravi',
//     writable: true
//   } );
// console.log(obj);



//==================== Entries ==========================//
// to see all our entries in array or object we use this method and we have to use loop also because we want to see all the entries we have did so loop help to view all entry

// const entry = Object.entries(obj1);

// for(const [key,value] of entry){
    // console.log(`${key}=${value}`);
//     console.log(key ,":" ,value);
// }


// ====================json to stringify method ==========================//
// this method convert object into string

// const objToStr=JSON.stringify(obj1);
// console.log(objToStr);
// console.log(obj1);

// Json parse method convert the proper json string to an object 

// const strToObj=JSON.parse(objToStr);
// console.log(strToObj);


// =====================     Freez Method    ==========================//

// we can freez object with this method after freezing the object we cant change or add something in it 

// const fobj ={"name":"ravi","id":2};


// console.log(fobj);
// // here i free obj 1
// Object.freeze(fobj);


// here i try to modify
// fobj.id=3;
// console.log(fobj);

// here i try to add new property
// fobj.class="msc.cs";
// console.log(fobj);

// here i try to assign a property of object to that freezed object 
// const asgn = {"surname":"singh"};
// Object.assign(fobj);
// console.log(p2);
// console.log(fobj)



// ===========================  Seal method ==========================//








