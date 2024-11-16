//ARRAY    

const myArray = [ 1,2,3,4,manisha]

myArray.push(8)
myArray.pop(3)
myArray.unshift(0)
myArray.shift()

console.log(myArray.includes(5));
console.log(myArray.indexOf(1)); 
const newArr = myArray.join()
// join will combine and also change the type of an array it will convert it into string from an array.

console.log(myArray);
console.log(newArr);

   //slice and splice 

   console.log("A",myArray);

   const myn1 = myArray.slice(1,3)
   console.log(myn1);

   // splice original array ko manipulate krta hai yani spice mai last value bhi include hoti hai or ye apni original value mai se un passing values ko hatta deta hai. 
   













