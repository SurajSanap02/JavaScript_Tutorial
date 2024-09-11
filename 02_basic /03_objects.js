//#objects defind keys & value 

//singleton
//object.create

//object literals 

const mySym = Symbol("key1")

const jsUser= {
    name:"SURAJ",
    [mySym]:"mykey1",
    age:18,
    location:"MUMBAI",
    email:"suraj@gmail.com",
    isLoggedIn : false,
    isLoggedDays:["Monday","Sunday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser.name)
console.log (jsUser[mySym])

jsUser.greeting= function () {
    console.log("hello js user ");
    
}
console.log(jsUser.greeting);


