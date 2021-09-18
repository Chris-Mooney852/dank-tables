const colours = {
	reset: '\x1b[0m',
	bg: {
		black: '\x1b[40m',
		red: '\x1b[41m',
		green: '\x1b[42m',
		yellow: '\x1b[43m',
		blue: '\x1b[44m',
		magenta: '\x1b[45m',
		cyan: '\x1b[46m',
		white: '\x1b[47m',
		crimson: '\x1b[48m'
	}
};

function dankTable(title, data, bgColour = colours.bg.cyan) {
	if (!bgColour.startsWith('\u001b')) {
		bgColour = colours.bg[bgColour].toLowerCase() || colours.bg.cyan;
	}

	console.log(`${bgColour}${title}${colours.reset}`);
	console.table(data);
}

function dankLog(title, data, bgColour = colours.bg.cyan) {
	if (!bgColour.startsWith('\u001b')) {
		bgColour = colours.bg[bgColour].toLowerCase() || colours.bg.cyan;
	}

	console.log(`${bgColour}${title}${colours.reset}`);
	console.log(data);
}

module.exports = {
	dankTable,
	dankLog
};