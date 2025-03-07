/*
How to name a variable perfectly?

* You can't use JavaScript reserve keyword as a variable name like false, const etc.
* You can't use space or gap in variable name
* You can't use quotation on variable name like const "address" = xyz
* You can't start variable name with number like 3name
* Variable name's are case sensitive. Like name, Name, namE this 3 words are 3 variable
* Use camelcase system for long name like myCurrentHomeAddress
* Can't use special character like *&%$.

*/

const favoriteFood = "Alu vaji";

const city = "Chittagong";
const City = "Dhaka";
console.log(city, City);

const userName = "Johan";
const username = "Jovan";
console.log(userName, username);

const homeAddress = "Debarpar, Agrabad, Chattogram";

const super = 50;
console.log(super); //SyntaxError: Unexpected token 'super'

const class = "Masters";
console.log(class); //SyntaxError: Unexpected token 'class'

// can't use number for naming variable. You can write this variable like const position2 = "Luffy";
const 2ndPosition = "Luffy";
console.log(2ndPosition); //SyntaxError: Invalid or unexpected token

