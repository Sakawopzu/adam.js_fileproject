const colors = require('colors');
const prompt = require('prompt-sync')({sigint: true});
const sleep = require('system-sleep');

console.clear()
sleep(1000)
console.log(`    AAA      DDDDDD       AAA      MMMM      MMMM`.rainbow.bold)
sleep(500)
console.log(`  AA   AA    DD   DD    AA   AA    MM MM    MM MM`.rainbow.bold)
sleep(500)
console.log(` AAAAAAAAA   DD   DD   AAAAAAAAA   MM  MM  MM  MM`.rainbow.bold)
sleep(500)
console.log(` AA     AA   DD   DD   AA     AA   MM   MMMM   MM`.rainbow.bold)
sleep(500)
console.log(` AA     AA   DDDDDD    AA     AA   MM    MM    MM ● js\n`.rainbow.bold)
sleep(1000)
const adamjsname = `ADAM.js`
const adamjsquote = `[ADAM.js]`
console.log(`${adamjsname.green.bold}, just a friendly file.`)
sleep(1000)
console.log(`Made with ${`love`.red.bold} by Adam.\n`)
sleep(2000)
 console.log(adamjsquote.green + ` Welcome to the ` + adamjsname.green.bold + ` program! What is your name?` + ` (Hint: There's also a very special name you can try..)\n`.yellow.bold)
const usersName = prompt(``)

sleep(1200)
if(usersName === 'Adam') {
console.log(`\n(Unsurprisingly, You found the special name.)\n`.yellow)
sleep(4000)
console.log(adamjsquote.green + ` Oh..`)
sleep(1000)
console.log(adamjsquote.green + ` Ummm..`)
sleep(3000)
console.log(adamjsquote.green + ` W-Well, hello, Me!\n`)
} else {
  console.log(adamjsquote.green +` Well, hello, ${usersName}!\n`)
}
sleep(3000)
console.log(adamjsquote.green + ` So, how is your fine day going?`);
sleep(2000)
console.log(adamjsquote.green + ` Good? Bad? Well, either way, here's something YOU should know.`)
sleep(4000)
console.log(adamjsquote.green + ` You certainly made ${`MY`.yellow.bold} day, by running me!\n`)