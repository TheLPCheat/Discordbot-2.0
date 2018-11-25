const Discord = require('discord.js')
const botconfig = require("../botconfig.json")
const fs = require("fs");
let coins = require("../coins.json");
let red = botconfig.red;
let green = botconfig.green;
let yellow = botconfig.yellow;
let prefix = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

module.exports.run = async (bot, message, msg) => {
	let cont = message.content.slice(prefix.length).split(" "); // This slices off the prefix, then stores everything after that in an array split by spaces.
	let args = cont.slice(1); // This removes the command part of the message, only leaving the words after it seperated by spaces
  let uCoins = coins[message.author.id].coins;
  if(args =! null){
	if(args <= uCoins) {

	let gmb = Math.floor(Math.random() * 100) +1;
			if(gmb <= 50) {
		    	coins[message.author.id] = 
				{
				coins: uCoins + parseInt(args)
				}
				fs.writeFile("../coins.json", JSON.stringify(coins), (err) =>
				{
				if (err) console.log(err)
				});
			let gmbwin = new Discord.RichEmbed()
			.setTitle("You have won!")
			.setColor(green)
			.addField("You have won: ", args * 2 + " coins!")

	
	message.channel.send(gmbwin);
			} else {
				coins[message.author.id] = 
				{
				coins: uCoins - parseInt(args)
				};
				fs.writeFile("../coins.json", JSON.stringify(coins), (err) =>
				{
				if (err) console.log(err)
				});
				let gmblse = new Discord.RichEmbed()
				.setTitle("Lost!")
				.setColor(yellow)
				.addField("You have lost", "Try again :D")
			
			message.channel.send(gmblse);
			}
		}else{
			let gmberr = new Discord.RichEmbed()
				.setTitle("You dont have enough money")
				.setColor(red)
				.addField("You dont have enogh money!", "you currently have " + uCoins + " Coins!")
			message.channel.send(gmberr)
		}
	} else {
		let usage = new Discord.RichEmbed()
		.setTitle("Wrong usage ._.")
		.setColor(red)
		.addField("Type in -gamble [amount]", "type -help for more help.")
	message.channel.send(usage)
	}
};
module.exports.help = {
  name: "gamble"
}
