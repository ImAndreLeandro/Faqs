const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");


client.on("ready", () => {
	console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
	client.user.setActivity(`PvPMetin2`, {type: 'Playing'});
	//const channel = client.channels.get('458252935172849688');
	//if (!channel) return;
	//channel.send("Hi");
});

client.on("message", async message => {
	let msg = message.content.toLowerCase();
	if (message.author.bot) return undefined;
	
  
	if (message.content.indexOf(config.prefix) !== 0) return;
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
    
	  try {
	    let commands = require(`./commands/${command}.js`);
	    commands.run(client, message, args);
	  } catch (e) {
	    console.log(e);
	  } finally {
	  }

});

client.login(process.env.TOKEN);
