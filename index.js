const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: '?',
	owner: '791567829408546818',
	invite: 'https://discord.gg/SasfU2Hv',
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['first', 'Your First Command Group'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	client.user.setActivity('with Commando');
});

client.on('error', console.error);

client.login('ODM4MzExOTQ4NTY2OTIxMjE2.YI5Q1w.qLKxtZYkdBBUU14xTATje86gLPQ');
