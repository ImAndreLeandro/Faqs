const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setAuthor("Transmutações!", message.guild.iconURL)
    .setColor([54, 57, 64])
    .setDescription("Veja as transmutações, usando `!transmutações <tópico>`"
                   + "\n\n__**Tópicos:**__"
                   + "\n- Escudo(s)\n- Pulseira(s)\n- Colar(es)\n- Sapato(s)\n- Elmo(s)\n- Arma(s)\n- Armadura(s)");
  if (args.length === 0) return message.channel.send(embed);
  if (args.length === 1) {
    if (args[0].toLowerCase() == 'escudo' || args[0].toLowerCase() == 'escudos') {
      const emb = new Discord.RichEmbed()
        .setAuthor("Transmutações", message.guild.iconURL)
        .setColor([54, 57, 64])
        .setDescription("__**Escudos:**__"
                       + "\n\n<:Escudo_Falcao:467656321513291796> Escudo Falcão :arrow_right: Escudo Universal"
                       + "\n<:Escudo_Lea:467656321102118923> Escudo Leão Angular :arrow_right: Escudo Divino");
      message.channel.send(emb);
    }
  }
}
