

function sayMyName() {

    console.log("S")
    console.log("U")
    console.log("R")
    console.log("A")
    console.log("J")
}

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
    console.log("suraj");
    //second type of return the output 
    return number1 + number2
    return result

}

const result = addTwoNumbers(3, 5)
console.log("result:", result);

// function using username called 
function loginUserMessage(username) {
    return `$ {username} just logged in in`
}
console.log(loginUserMessage("suraj"));


// function using  login user message  called 
function loginUserMessage  (username){
    return `${username} just logged in `
}
console.log(loginUserMessage("suraj"));

//
function calculateCartPrice (num1){  
 return num1
}
 console.log(calculateCartPrice(2));

 const user = {
    username : " suraj",
    price:199
 }

 function handleObject(anyobject){
    console.log(`username is $ {anyobject.} and price is {}`);
    {anyobject.price}
    
 }
 handleObject(user)

 handleObject({
    username :"suraj",
    price :399
 })

 const myNewArray = [200,400,800,600]

 function returnSecondValue(getarray){
    return getarray[1]
 }
 console.log(returnSecondValue(myNewArray));
 

