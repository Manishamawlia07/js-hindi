// singleton  ( constructor se bne ga to singleton othervise )

// object literals

const mySym = Symbol("key1")// 1. symbol lena hai define krna hai 

const jsUser = {
    name:"manisha",
    "full name": "manisha mawlia",
    [mySym]: "mykey1", // keys ki trh act krna hai 
    age:24,
    email: "manishamawlia0710.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym])


