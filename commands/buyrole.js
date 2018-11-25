const Discord = require('discord.js')
const botconfig = require("../botconfig.json")
const fs      = require('fs')
let coins = require("../coins.json");
let red = botconfig.red;
module.exports.run = async (bot, message, args, memb) => {
    let messageArray = message.content.split(" ");
    let cmdargs = messageArray.slice(0);
    let cmdarg = cmdargs[1];

    console.log(cmdarg);
    if (cmdarg == null) {
        let buyrole = new Discord.RichEmbed() 
        .setTitle("__**List of all Roles: **__")
        .setColor(red)
        .addField("**=>** __**Usage: -buyrole [role number] **__", "Availeble ranks:")
        .addField("1. member", "M E M B E R, Costs 50 Coins");
          message.channel.send(buyrole);
    }
    if (cmdarg == "member"){ 
      var role = message.guild.roles.find(role => role.name = "Flachland", 516339545172606987);
      let uCoins = coins[message.author.id].coins;
      if(uCoins >= 50){
        coins[message.author.id] = {
          coins: uCoins - 50
        }
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
          if(err) cosole.log(err)
        });
        message.member.addRole(role)
        message.channel.send('', new Discord.RichEmbed().setColor(0x29B6F6).setDescription(`You got automatically assigned the role ${role.name}!`))
      }else{

      }
       
      }else{
        if(cmdarg != null){
          let byrlerr = new Discord.RichEmbed()
          .setTitle("__**This Role doesnt exist!**__")
          .setColor(red)
          .addField("This Role doesnt exist, did you type anything wrong? Please note that you have to write the rolename all in lower cases. -help roles for help.", "You typed in: " + cmdarg)
          message.channel.send(byrlerr)   
        }
      }         

}

module.exports.help = {
  name: "buyrole"
}
