const accountId = 12345;
let accountEmail = "ayushphapale25@gmail.com";
var accountPassword = "98765";
accountCity = "pune";
let accountState;
// accountId = 45678; //not allowed

accountEmail = "abc@gmail.com";
accountPassword= 58439;
accountCity = "mumbai";

// never use var
// beacuse of issue in block scope and functional scope


console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

