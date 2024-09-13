const  userEmail = []
if (userEmail){
    console.log("got user email");   
} else {
        console.log ("don't have user email ");
    }

//  falsy values 
// = false , 0, -0,BigInt ,"", null , undefined ,NaN

//  truthy value 
// = "0" , 'false',"" [], {}, function(){}

//check the data type 

if (userEmail .length ===0) {
    console.log("array is empty")
}

//object 
if (Object .keys(emptyobj).length ===0){
    console.log("object is empty");
    
}


// Nullish coalescing operator (??) null undefined 

let vali;
vall = 5 ?? 10
vali= null ?? 10   
var1 = userEmail ??15

//Terniary Operator

condition ? true:false

const iceTeaprice = 100
iceTeaprice >= 80 ? console.log("less than 80"):console.log("more than 80 ") // output=less than 80
