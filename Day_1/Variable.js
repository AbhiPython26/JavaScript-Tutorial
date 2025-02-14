const accountId = 12345
let accountEmail = "Abhishekgupta@gmail.com"
var accountPassword = "12345"
accountCity = "Sitamarhi"

// accountId = 2 // not allowed

accountEmail = "siab@gmail.com"
accountPassword = "323232"
accountCity = "bengaluru"
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
 */
console.table([accountId, accountEmail, accountPassword,accountCity,accountState])