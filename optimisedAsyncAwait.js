require('colors');
const prompt = require('prompt-sync')({sigint: true});
const performTimeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const runTaskList = async tasklist => {
	for (let { text, fnToRun, timeout } of tasklist) {
		text !== undefined && console.log(text);
		fnToRun !== undefined && typeof fnToRun === 'function' && await fnToRun();
		timeout !== undefined && await performTimeout(timeout);
	}
};
const checkForAdam = async () => {
	const username = prompt('');
	await performTimeout(1200); // Not sure why wait for 1.2 secs but ok.
	await runTaskList(username.toLocaleLowerCase() === 'adam' 
	? [
		{ text: `\n(Unsurprisingly, You found the special name.)\n`.yellow, timeout: 4000 },
		{ text: `${'[ADAM.js]'.green} Oh..`, timeout: 1000 },
		{ text: `${'[ADAM.js]'.green} Ummm..`, timeout: 3000 },
		{ text: `${'[ADAM.js]'.green} W-Well, hello, Me!\n`, timeout: 3000 },
	] : [{ text: `${'[ADAM.js]'.green} Well, hello, ${username}!\n`, timeout: 3000 }]);
}
const thingsToDo = [
	{ fnToRun: console.clear, timeout: 1000 },
	{ text: `    AAA      DDDDDD       AAA      MMMM      MMMM`.rainbow.bold, timeout: 500 },
	{ text: `  AA   AA    DD   DD    AA   AA    MM MM    MM MM`.rainbow.bold, timeout: 500 },
	{ text: ` AAAAAAAAA   DD   DD   AAAAAAAAA   MM  MM  MM  MM`.rainbow.bold, timeout: 500 },
	{ text: ` AA     AA   DD   DD   AA     AA   MM   MMMM   MM`.rainbow.bold, timeout: 500 },
	{ text: ` AA     AA   DDDDDD    AA     AA   MM    MM    MM ● js\n`.rainbow.bold, timeout: 1000 },
	{ timeout: 1000 },
	{ text: `${'ADAM.js'.green.bold}, just a friendly file.`, timeout: 1000 },
	{ text: `Made with ${`love`.red.bold} by Adam.\n`, timeout: 2000 },
	{ text: `${'[ADAM.js]'.green} Welcome to the ${'ADAM.js'.green.bold} program! What is your name? ${"(Hint: There's also a very special name you can try..)\n".yellow.bold}`},
	{ fnToRun: checkForAdam },
	{ text: `${'[ADAM.js]'.green} So, how is your fine day going?`, timeout: 2000 },
	{ text: `${'[ADAM.js]'.green} Good? Bad? Well, either way, here's something YOU should know.`, timeout: 4000 },
	{ text: `${'[ADAM.js]'.green} You certainly made ${`MY`.yellow.bold} day, by running me!\n` },
];
(async function () { await runTaskList(thingsToDo); })(); // this is called an IIFE - Immediately Invoked Function Expression
