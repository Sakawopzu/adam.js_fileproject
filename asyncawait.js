const colors = require('colors');
const prompt = require('prompt-sync')({sigint: true});

const adamjsname = `ADAM.js`
const adamjsquote = `[ADAM.js]`

/**
 * This function makes the computer wait for x amount of milliseconds.
 * If you have other functions running, doing this won't stop the computer and make your app freeze.
 * but doing `sleep(ms)` would.
 * 
 * This is called non-blocking function calls, or async.
 **/
function performTimeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * A list of stuff for the program to do.
 * If there's no text to print, the program should just ignore printing text.
 * Same thing for timeout, if there's no timeout, the program should just ignore waiting.
 * 
 * Also, the program should always try to print text first - if any, then wait - again if any.
 */
const thingsToDo = [
	{ fnToRun: console.clear, timeout: 1000 },
	{ text: `    AAA      DDDDDD       AAA      MMMM      MMMM`.rainbow.bold, timeout: 500 },
	{ text: `  AA   AA    DD   DD    AA   AA    MM MM    MM MM`.rainbow.bold, timeout: 500 },
	{ text: ` AAAAAAAAA   DD   DD   AAAAAAAAA   MM  MM  MM  MM`.rainbow.bold, timeout: 500 },
	{ text: ` AA     AA   DD   DD   AA     AA   MM   MMMM   MM`.rainbow.bold, timeout: 500 },
	{ text: ` AA     AA   DDDDDD    AA     AA   MM    MM    MM ● js\n`.rainbow.bold, timeout: 1000 },
	{ timeout: 1000 },
	{ text: `${adamjsname.green.bold}, just a friendly file.`, timeout: 1000 },
	{ text: `Made with ${`love`.red.bold} by Adam.\n`, timeout: 2000 },
	{ text: adamjsquote.green + ` Welcome to the ` + adamjsname.green.bold + ` program! What is your name?` + ` (Hint: There's also a very special name you can try..)\n`.yellow.bold },
	{ fnToRun: checkForAdamAndAddStuffToList }, // No timeout here because the function already incorporates it's own timeouts.
];

function checkForAdamAndAddStuffToList() {
	/** Decide what task to perform based on username. */
	const username = prompt();
	const taskList = username === 'Adam'
	? [
			{ text: `\n(Unsurprisingly, You found the special name.)\n`.yellow, timeout: 4000 },
			{ text: adamjsquote.green + ` Oh..`, timeout: 1000 },
			{ text: adamjsquote.green + ` Ummm..`, timeout: 3000 },
			{ text: adamjsquote.green + ` W-Well, hello, Me!\n`, timeout: 3000 },
		]
	: [
		{ text: adamjsquote.green +` Well, hello, ${usersName}!\n`, timeout: 3000 },
	];

	taskList.push(...[
		{ text: adamjsquote.green + ` So, how is your fine day going?`, timeout: 2000 },
		{ text: adamjsquote.green + ` Good? Bad? Well, either way, here's something YOU should know.`, timeout: 4000 },
		{ text: adamjsquote.green + ` You certainly made ${`MY`.yellow.bold} day, by running me!\n` },
	]);

	/** Add to the array of things to do. */
	thingsToDo.push(...taskList);
}

/**
 * This function runs every line of task in the task array.
 * 
 * It has async in front because we want to let the computer know, hey this function is gonna expect some waiting time.
 * If the computer needs to wait, he can go do other things in the mean time while he waits.
 * Again, non-blocking, or asynchronous.
 */
async function runTasklist(tasklist) {
	for (let task of tasklist) {
		// get all the items out.
		const { text, fnToRun, timeout } = task;

		// Check for text first, if there is text, console log it.
		if (text !== undefined) console.log(text);

		// Then check function to run.
		if (fnToRun !== undefined && typeof fnToRun === 'function') fnToRun();

		// Finally, wait, if there's timeout.
		if (timeout !== undefined) await performTimeout(timeout);
	}
}

function runProgram() {
	runTasklist(thingsToDo);
}

runProgram();
