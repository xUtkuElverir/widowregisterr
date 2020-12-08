const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  
 if(!message.member.roles.cache.has('781466111841140766')) return message.channel.send('Bu kodu kullanmak için yeterli yetkin yok! \<a:hayir:782879758760280074> ')
  
  let member = message.mentions.members.first();
  let isim = args[1]
  let yaş = args[2]
  let al = "781466126743240775"; ///alınacak rol idsi
  let ver = "781466126239531050"; ///verilecek rol idsi
  if (!member) return message.channel.send("Bir Kullanıcı Etiketle");
  if (!isim) return message.channel.send("Bir İsim Girmelisin!");
  member.setNickname(`${isim}  [${yaş}]`);
  
    member.roles.add(ver);
    member.roles.remove(al);
  

  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("\<a:tick:782886374982418442>  Kayıt işlemi başarılı \<a:tick:782886374982418442> ")
    .setImage("https://media.tenor.com/images/5a8496cf0faf284d514a8cedc3f7332d/tenor.gif")
    .setDescription(`
\<a:ucgen:782269264223535144>  **Kayıt Edilen Kullanıcı** : ${member.user.username} \<a:ucgen:782269264223535144> 
\<a:yldz:782269240953798667>  **Kayıt Eden Yetkili** : ${message.author.username} \<a:yldz:782269240953798667> 

**Kayıt İşleminde Verilen Rol** : 
<@&781466126239531050>

**Kayıt İşleminde Alınan Rol** :
<@&781466126743240775>
`)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["erkek" , "e"],
  permLevel: 0
}
exports.help = {
  name: 'Erkek',
  description: "Erkek Kayıt Sıstemı",
  usage: 'Erkek isim yaş'
}