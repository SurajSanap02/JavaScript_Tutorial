//const tinderuser = new Object()

const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "SURAJ"
tinderuser.isLoggedIn = false

console.log(tinderuser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "suraj",
            lastname: "sanap",
        }
    }
}

console.log(regularUser.fullname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

//const obj3 =Object.assign({},obj1,obj2,obj4
const obj3 = { ...obj1, ...obj2 }//using sparte opertor 

console.log(obj3);

//geting databse value 
const user = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
    },
    {
    },
    {
    },
    {
    },
]

user[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnPropery('isLoggedIN'));


const course ={
    coursename: " java script ",
    courseprice:"999",
    courseInstructor:"chai with code"
}

//#syntax

