const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client()
var http = require('http');
const content = new Discord.Client()
const fs = require("fs");
const ffmpeg = require ('ffmpeg')
const yt = require('ytdl-core');
con = console.log,


setInterval(function() {
        let rndNumber = Math.floor(Math.random() * 4) + 1;
        switch (rndNumber) {
          case 1:
                bot.user.setUsername("Poulpy-Extension™")
 		bot.user.setGame("The Octokling#1148 me fait grandiiiiir !!!");
                break;
          case 2:
                bot.user.setUsername("Poulpy-Extension (v.0.3)™")
 		bot.user.setGame("Poulpy Extension v.0.3#2487 améliore mon frère pour qu'il soit en 0.4 .");
                break;
	  case 3:
                bot.user.setUsername("Poulpy-Extension (v.0.3)™")
 		bot.user.setGame("The Octokling#1148 me fait grandiiiiir !!!");
                break;
                     
	  case 4:
                bot.user.setUsername("Poulpy-Extension™")
 		bot.user.setGame("Poulpy Extension v.0.3#2487 améliore mon frère pour qu'il soit en 0.4 .");
                break;
        }
    }, 999999);

    console.log("Je suis connecté");

    bot.on('guildMemberAdd', member => {
      member.createDM().then(channel => {
        return channel.send("Salut" + member.displayName + "! Et bienvenue sur le serveur Poulpy-Extension , Tu peut télécharger mon frère (l'extension chrome) , dans le salon textuel tutoriel. Mais avant, peut-tu regarder les regle ? ")
      }).catch(console.error)
    })

bot.on("message", message =>{
   if (message.content.startsWith(`!a`)) {
try{

    var emb = new Discord.RichEmbed()
            .setColor("#FFFF00")
            .setTitle("Rendez vous !")
            .setDescription(`@here Salut tous le monde je me présente déja sur suis poulpy-extension le robot (le frère de l'extension). <@342932332283559936> et <@357912301216595971> vous invite pour faire un petit event vocale sur sur le salon Vocale-Extension v.0.3 ;)`)
            .setFooter(`© Poulpy-Extension™ est tous droits réservés et Créé par The Octokling et Poulpy Extension`, bot.user.avatarURL)
    member.guild.channels.find("name", 'annonces').send(emb);
}catch(err){
	message.channel.send("Une erreur c'est produite , veuillez en parlez à The octokling ou Poulpy Extension. Merci")
}
    }});

  bot.login(process.env.TOKEN)
