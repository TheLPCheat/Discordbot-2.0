const Discord = require('discord.js')
const botconfig = require("../botconfig.json")
let yellow = botconfig.yellow;
let green = botconfig.green;
let red = botconfig.red;

module.exports.run = async (bot, message, args, msg) => {
  let messageArray = message.content.split(" ");
  let cmdargs = messageArray.slice(0);
  let cmdarg = cmdargs[1];
  if(cmdarg == null){
let help = new Discord.RichEmbed() 
  .setTitle("__**List of all commands: **__")
  .setColor(yellow)
  .addField("**=>** __**-help currency**__", "Shows you currency commands")
  .addField("**=>** __**-help info**__ ", "Shows you information commands")
	message.channel.send(help);
  }
  if(cmdarg == "currency"){
let helpcur = new Discord.RichEmbed() 
  .setTitle("__**Currency commands:**__")
  .setColor(green)
  .addField("**=>** __**-coins**__", "Shows you your current coins.")
  .addField("**=>** __**-pay [@username] [amount]**__ ", "Allows to pay someone.")
  .addField("**=>** __**-gamble [amount]**__", "Allows you to gamble your coins")
  message.channel.send(helpcur);
  }
  if(cmdarg == "info"){
    let helpinfo = new Discord.RichEmbed() 
    .setTitle("__**Info commands commands:**__")
    .setColor(green)
    .addField("**=>** __**-serverinfo**__", "Shows you the server infos and stats.")
    .addField("**=>** __**-userinfo [@name(optional)]**__ ", "Shows the userinfo.")
    .addField("**=>** __**-botinfo**__", "Shows you the info of this bot.")
    message.channel.send(helpinfo);
  }else{
    if (cmdarg != null){
    let err = new Discord.RichEmbed() 
    .setTitle("__**Error**__")
    .setColor(red)
    .addField("__**This category is not defined:**__", message.content)
    message.channel.send(err);
    }
  }
}

module.exports.help = {
  name: "help"
}
