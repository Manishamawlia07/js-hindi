const tinderUser = new Object()
const newTinder = {}

newTinder.id = "123bac"
newTinder.name = "manisha"
newTinder.isLoggedIn = false

console.log(tinderUser);
console.log(newTinder);

const regularUser ={ 
    email:"someone.gmail.com",
    fullname:{
        username:{
            firstname:"manisha",
            lastname:"mawlia"
        }
    }
}

console.log(regularUser.fullname); // we can access the nesting values by dot 

const obj1 = {
    1:"a",
    2:"b",
    3:"c"
}

const obj2 = {
    4:"d",
    5:"e",
    6:"f"
}

//  const obj3 ={ obj1,obj2}
//const obj3 = Object.assign({}, obj1, obj2)// {} => Target   obj1 and obj2 are source

const obj3 ={...obj1, ...obj2}
 console.log(obj3);
// jab data base se aate hai tab array of objects aate hai 

 const users =[
    {
      id:1,
      email:"mm.gmail.com"  

    },
//array kai ander bhot sare objects hai 
    {
        id:1,
        email:"mm.gmail.com"  
  
      },
      {
        id:1,
        email:"mm.gmail.com"  
  
      },
 ]

 users[1].email // 1 object hai to . se access kr skte hai 

 console.log(newTinder);

 console.log(Object.keys(newTinder));// output value ka datatype array hota hai jisme hum loops lga skte hai keys pai very important in database .
 console.log(Object.values(newTinder));
 console.log(Object.entries(newTinder));

 // objects de-structure

 const course = {
    coursename:" js in hindi",
    price:1000,
    instructor:"hitesh"
 }

 //course.instructor

 const {instructor: courseinstructor} = course
 console.log(courseinstructor);

 //JSON

 {// ye hai api format in form of objects ki form mai hoti hai api 
    // "NAME":" manisha",
    // "coursename":" js in hindi ",
    // "price":"free"
 }

 // array ki fortm mai bhi hoti hai api.
 [
    {},
    {},
    {},
    {}
 ]

 
 

  
 





