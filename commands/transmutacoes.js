const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setAuthor("Transmutações!", message.guild.iconURL)
    .setColor([54, 57, 64])
    .setDescription("Veja as transmutações, usando `!transmutações <tópico>`"
                   + "\n\n__**Tópicos:**__"
                   + "\n- Escudo(s)\n- Pulseira(s)\n- Colar(es)\n- Sapato(s)\n- Elmo(s)\n- Arma(s)\n- Armadura(s)")
    .setTimestamp();
  if (args.length === 0) return message.channel.send(embed);
  if (args.length === 1) {
    if (args[0].toLowerCase() == 'escudo' || args[0].toLowerCase() == 'escudos') {
      const emb = new Discord.RichEmbed()
        .setAuthor("Transmutações", message.guild.iconURL)
        .setColor([54, 57, 64])
        .setDescription("__**Escudos:**__"
                       + "\n\n<:Escudo_Falcao:467656321513291796> Escudo Falcão :arrow_right: Escudo Universal"
                       + "\n<:Escudo_Lea:467656321102118923> Escudo Leão Angular :arrow_right: Escudo Divino"
                       + "\n<:Escudo_Tig:467656321424949248> Escudo Tigre Monge :arrow_right: Escudo Glaciar"
                       + "\n<:Escudo_Esc:467656321391525888> Escudo Escamas Dragão :arrow_right: Escudo do Caos")
      .setTimestamp();
      message.channel.send(emb);
    }
    if (args[0].toLowerCase() == 'pulseira' || args[0].toLowerCase() == 'pulseiras') {
      const emb = new Discord.RichEmbed()
        .setAuthor("Transmutações", message.guild.iconURL)
        .setColor([54, 57, 64])
        .setDescription("__**Pulseiras:**__"
                       + "\n\n<:Pulseira_Safira:467671920012296193> Pulseira de Safira :arrow_right: Pulseira Universal")
      .setTimestamp();
      message.channel.send(emb);
    }
    if (args[0].toLowerCase() == 'colar' || args[0].toLowerCase() == 'colares') {
      const emb = new Discord.RichEmbed()
        .setAuthor("Transmutações", message.guild.iconURL)
        .setColor([54, 57, 64])
        .setDescription("__**Colares:**__"
                       + "\n\n<:Colar_Saf:467679303916584980> Colar de Safira :arrow_right: Colar da Dor")
      .setTimestamp();
      message.channel.send(emb);
    }
    if (args[0].toLowerCase() == 'sapato' || args[0].toLowerCase() == 'sapatos') {
      const emb = new Discord.RichEmbed()
        .setAuthor("Transmutações", message.guild.iconURL)
        .setColor([54, 57, 64])
        .setDescription("__**Sapatos:**__"
                       + "\n\n<:Sapatos_Kirin:467679864128798720> Sapatos Kirin :arrow_right: Sapatos de Fogo")
      .setTimestamp();
      message.channel.send(emb);
    }
    if (args[0].toLowerCase() == 'elmo' || args[0].toLowerCase() == 'elmos') {
      const emb = new Discord.RichEmbed()
        .setAuthor("Transmutações", message.guild.iconURL)
        .setColor([54, 57, 64])
        .setDescription("__**Escudos:**__"
                       + "\n\n<:Elmo_Condestavel:467681134986395658> Elmo Condestável :arrow_right: Elmo Pacífico"
                       + "\n<:Capuz_Ara:467681134663434261> Capuz Aranha :arrow_right: Capuz Oricalcus"
                       + "\n<:Chapeu_Das_Alm:467681134910636062> Chapéu das Almas :arrow_right: Elmo da Dor"
                       + "\n<:Elmo_Mag:467681134940127242> Elmo Mágico :arrow_right: Elmo Destemido")
      .setTimestamp();
      message.channel.send(emb);
    }
  }
  const channel = client.channels.get('467660871653654548');
  if (!channel) return;
  const embe = new Discord.RichEmbed()
    .setAuthor("Comando Transmutações")
    .setColor([54, 57, 64])
    .setDescription("User: **" + message.author.username + "**#" + message.author.discriminator
                   + "\nContent: `" + message.content + "`")
    .setTimestamp();
  channel.send(embe);
}
