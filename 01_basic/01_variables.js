const accountId = 1443
let accountEmail = "suraj@gmail.com"
var accountPassword = "1234"
accountCity = "Bombay"
let accountState;

//acountId =2 //not allowed 

console.log(accountId);
console.log(accountEmail);


accountEmail = "su@.com"
accountPassword = "3344"
accountCity = "nashik"


/*
perfer not to use var (variable)
because of issue in block scope and functional 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])