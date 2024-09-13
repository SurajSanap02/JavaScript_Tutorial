//if condition 

const isUserloggedIn = true

if (temperayure === 41) {
    console.log("less than 50");
} else {
    console.log("temperature is greeter than 50");
}
console.log("execute");

// console.log ("<,>, <= , =>, ==, != , === , !==")

//scope in js 
const score = 200
if (score > 100) {
    let power = "fly"
    console.log(`user power :${power}`);
}
console.log(`user power : ${power}`);


// MULTIPLE CONDITION  CHECKED 
const balance = 1000
if (balance > 500) {
    console.log("less than 500");

} else if (balance < 900) { // esle if = multiple checked 
    console.log();
}
else {
    console.log("less than 1200");

}

// MULTIPLE CONDITION  CHECKED  ( online shoping login )

const debitcard = true
const loggedInFromgoogle = false 
const loggedInFromEmail = true

if (isUserloggedIn && debitcard && 2==3){
    console.log("allow to buy course");
}
if(user)(loggedInFromgoogle || loggedInFromEmail){
    console.log("user login in");
}

