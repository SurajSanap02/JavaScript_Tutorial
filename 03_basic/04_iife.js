// Immediately invoked function Expression (IIFE)


(function chai(){
    console.log('DB CONNECTED');
})();

((email) =>{
    console.log(`DB CONNECTED TWO ${email}`);
})('suraj@gmail.com')

