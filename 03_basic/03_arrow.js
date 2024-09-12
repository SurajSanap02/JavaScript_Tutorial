const user = {
    username:"suraj",
    price:999,

    welcomeMessage : function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
user.welcomeMessage
user.username="sam"
user.welcomeMessage()

function chai (){
    console.log(this);
}
//*********arrow function*********//
//syntax
//  const addTwo = (num1,num2)=>{
//  return num1 + num2
//  }
//*************************************************


const one =  ()=>{
    let username = "suraj"
    console.log(this.username);
}
one()

