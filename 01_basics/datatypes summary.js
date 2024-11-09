// Two types of data types 

// primitive 


// 7 types =>    string , boolean, number , bigint, symbol, null, undefined

const score = 100;

const name = manisha;
const isLoggedIn = true;
const number= 12345678n;
const mintemp = null;
let average;

let symbol= symbol('123')
 let anotherSymbol= Symbol('123');

// non- primitive 

// array objects function

//Array=>

    let heroes= [ "shaktiman"," nagraj", "doga"]

    let myObj = {
        name: "hitesh",
        age: 23,
        // we can pass any array and functio to an object

    }
     let myFun = function(){
        console.log("hello world");

    }

    // stack ( primitive)  heap ( non primitive)

    let myname =" manihsha"
    let newname = myname

    newname = "mawliamanisha"
    console.log(myname);
    console.log(newname);// in primitive the newcopy of variable name is stored and that is why it is stack.

    let userOne = {
        email: " manishamawlia@gmail.com",
        upi: "myupi",
    }
    let userTwo = userOne
    userTwo.email = " mymail.com"
    console.log(userTwo.email);// two different value will prinit because the referance the same.

    
    
    
    
     

