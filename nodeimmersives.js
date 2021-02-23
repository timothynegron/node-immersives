// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

// 1. Take in two args, first name and last name with space
const firstName = getInput(0);
const lastName = getInput(1);

// 2. Say hi to the user
console.log('Hello! ' + firstName + ' ' + lastName + '.');

// 3. Capitalize their name along with a message
console.log('I\'m going to capitalize your name with the .toUpperCase() function, here: ' + firstName.toUpperCase() + ' ' + lastName.toUpperCase())

// 4. Output their initialize
console.log('Here are your initials: ' + firstName[0] + ' ' + lastName[0])

// 5. Output their code immersives email
console.log('This is your code immersives email address: ' + firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@codeimmersives.com' )
