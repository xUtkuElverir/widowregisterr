const Discord = require('discord.js');
const ayarlar = require('../kobs.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`ROEY Register Bot`)
.setDescription(`


\<a:raptiye:783353647550955610>  **=**  \`w!erkek\` : **w!e/erkek etiket isim yaş\<a:yuklen:782271167909462037> **
\<a:raptiye:783353647550955610>  **=**  \`w!kız\`:  **w!k/kız etiket isim yaş\<a:yldz:782269240953798667> **

`)
.setImage("https://cdn.discordapp.com/attachments/740871896614043669/748878433840398367/Baslksz-1.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};