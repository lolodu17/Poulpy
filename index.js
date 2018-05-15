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
	  case 5:
                bot.user.setUsername("Poulpy-Extension™")
 		bot.user.setGame("ஐ ẦßχῪ ஐ#2487 revien vite nous voir :sob:");
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
    message.guild.channels.find("name", '💭blabla💬').send(emb);
}catch(err){
	message.channel.send("Une erreur c'est produite , veuillez en parlez à The octokling ou Poulpy Extension. Merci")
}
    }});

bot.on("guildMemberAdd", async member => {
try {
    let rol = member.guild.roles.find("name", "Les Inkling")
    var emb = new Discord.RichEmbed()
            .setColor("730000")
            .setTitle("woomycation")
            .setDescription(`:squid:${member.user.tag} est arivé(e):squid:`)
            .setFooter(`© Poulpy-Extension™ est tous droits réservés et Créé par The Octokling et Poulpy Extension`, bot.user.avatarURL)
    member.guild.channels.find("name", '💭blabla💬').send(emb);
    member.addRole(rol)
}catch(err){
	member.owner.send("une erreur es survenue lors de l'envoie de l'information. ")

}});
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
if(cmd == `!clear`){
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission pour supprimer les message !");
    if(!args[0]) return message.channel.send("Vous devez préciser combien de message je dois supprimer !");
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`Clear de ${args[0]} messages.`).then(msg => msg.delete(5000));
  })

  return;
  }
});
 bot.on("roleCreate", role =>{
try{
        var emb = new Discord.RichEmbed()
        .setColor("FF0000")
        .setTitle("woomycation")
        .setDescription(`Un rôle viens d'être ,nommé : ${role.name}`)
        .setFooter(`© Poulpy-Extension™ est tous droits réservés et Créé par The Octokling et Poulpy Extension`, bot.user.avatarURL)
        role.guild.channels.find("name", '💭blabla💬').send(emb)
	role.react(":thumbsdown:")
}catch(err){
	role.owner.send("une erreur es survenue lors de l'envoie de l'information.")

}
    });

 bot.on("roleDelete", role =>{
try{
        var emb = new Discord.RichEmbed()
        .setColor("730000")
        .setTitle("woomycation")
        .setDescription(`Le rôle ${role.name} viens d'être supprimé sur ${role.guild.name}. `)
        .setFooter(`© Poulpy-Extension™ est tous droits réservés et Créé par The Octokling et Poulpy Extension`, bot.user.avatarURL)
    role.guild.channels.find("name", '💭blabla💬').send(emb)
        }catch(err){
	role.owner.send("une erreur es survenue lors de l'envoie de l'information.")

}
    })


bot.on("channelsDelete", channels=>{
try{
        var emb = new Discord.RichEmbed()
        .setColor("730000")
        .setTitle("woomycation")
        .setDescription(`Un nouveau channel vient d'être supprimer sur ${channels.guild.name}.`)
        .setFooter(`© Poulpy-Extension™ est tous droits réservés et Créé par The Octokling et Poulpy Extension`, bot.user.avatarURL)
    channels.guild.channels.find("name", '💭blabla💬').send(emb)
       }catch(err){
	channels.owner.send("une erreur es survenue lors de l'envoie de l'information.")

} 
    })

bot.on("channelsCreate", channels =>{
try{
        var emb = new Discord.RichEmbed()
        .setColor("730000")
        .setTitle("woomycation")
        .setDescription(`Un channel vient d'être supprimé sur ${channels.guild.name}.`)
        .setFooter(`© Poulpy-Extension™ est tous droits réservés et Créé par The Octokling et Poulpy Extension`, bot.user.avatarURL)
    channels.guild.channels.find("name", '💭blabla💬').send(emb)
        }catch(err){
	channels.owner.send("une erreur es survenue lors de l'envoie de l'information.")

}
    })


 bot.on("emojiCreate", emoji =>{
try{
        var emb = new Discord.RichEmbed()
            .setFooter(`© Poulpy-Extension™ est tous droits réservés et Créé par The Octokling et Poulpy Extension`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("woomycation")
            .setDescription(`L'image ${emoji.name} :${emoji.name}: viens d'être importé pour un émoji sur ${emoji.guild.name}.`)
        emoji.guild.channels.find("name", '💭blabla💬').send(emb)
}catch(err){
	emoji.owner.send("une erreur es survenue lors de l'envoie de l'information.")

}
    })

 bot.on("emojiDelete", emoji =>{
try{
        var emb = new Discord.RichEmbed()
            .setFooter(`© Poulpy-Extension™ est tous droits réservés et Créé par The Octokling et Poulpy Extension`, bot.user.avatarURL)
            .setColor("730000")
            .setTitle("woomycation")
            .setDescription(`L'emoji ${emoji.name} :${emoji.name}: viens d'être supprimé sur ${emoji.guild.name}.`)
        emoji.guild.channels.find("name", '💭blabla💬').send(emb)
        }catch(err){
	emoji.owner.send("une erreur es survenue lors de l'envoie de l'information.")

}
    })


  bot.login(process.env.TOKEN)
