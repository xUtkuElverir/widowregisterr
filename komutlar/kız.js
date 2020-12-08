const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  
 if(!message.member.roles.cache.has('781466111841140766')) return message.channel.send('Bu kodu kullanmak için yeterli yetkin yok! \<a:hayir:782879758760280074> ')
  
  let member = message.mentions.members.first();
  let isim = args[1]
  let yaş = args[2]
  let al = "781466126743240775"; ///alınacak rol idsi
  let ver = "781466125531742208"; ///verilecek rol idsi
  if (!member) return message.channel.send("Bir Kullanıcı Etiketle");
  if (!isim) return message.channel.send("Bir İsim Girmelisin!");
  member.setNickname(`${isim}  [${yaş}]`);
  
    member.roles.add(ver);
    member.roles.remove(al);
  

  const embed = new Discord.MessageEmbed()
    .setColor("PİNK")
    .setTitle("\<a:tick:782886374982418442>  Kayıt işlemi başarılı \<a:tick:782886374982418442> ")
    .setImage("https://media.tenor.com/images/5a8496cf0faf284d514a8cedc3f7332d/tenor.gif")
    .setDescription(`
\<a:sonsuzkobs:782285078473867286>  **Kayıt Edilen Kullanıcı** : ${member.user.username} \<a:sonsuzkobs:782285078473867286> 
\<a:durum:783017957580079206>  **Kayıt Eden Yetkili** : ${message.author.username} \<a:durum:783017957580079206> 

**Kayıt İşleminde Verilen Rol** : 
<@&781466125531742208>

**Kayıt İşleminde Alınan Rol** :
<@&781466126743240775>
`)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kız" , "k"],
  permLevel: 0
}
exports.help = {
  name: 'kız',
  description: "Kız Kayıt Sıstemı",
  usage: 'Kız isim yaş'
}