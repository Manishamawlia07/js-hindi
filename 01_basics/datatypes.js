// two types of data type : premitive and non premitive data types.
 //premitive :

 /* numbers = 2 to the power of 53
    string= " manisha"
    boolean= is logged in true or false
    bigint= for larger values 
    null= absence pf an object. // typeof null is object 
    undefiened= letx; typeof undefined is undefined
 */

    // non premittive are objects:
    const student = {
        name : "manisha",
        age: 23,
        skills: " javascript"

    }
    console.log(student);



    // Data type conversion or operation

    let score = 22;
    console.log( typeof score);

     let score1 = "23";  
     let valueInNumber = Number(score1)
     console.log(typeof valueInNumber);

     let newNumber = "22abc"
     let valueInNewNumber = Number(newNumber)
     console.log(typeof valueInNewNumber);

     console.log( valueInNewNumber );

     // value in case of null is 0 and undefined is NaN // string conversion to number is NaN

     let isLoggedIn = 1
     let valueOfBoolean = Boolean(isLoggedIn);
     console.log(valueOfBoolean);

     let isLoggedIn1 = "manisha"
     let valueOfBoolean1 = Boolean(isLoggedIn1);
     console.log(valueOfBoolean1);

     // 1 => true, 0 => false
     //"Manisha" => true, "" => False.

     let sumNumber = 33
     let stringNumber = String(sumNumber);
     console.log( typeof stringNumber);












     


    
