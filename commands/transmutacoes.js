const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setAuthor("Transmutações!")
    .setColor([54, 57, 64])
    .setDescription("Veja as transmutações, usando `!transmutações <tópico>`"
                   + "\n\n__**Tópicos:**__"
                   + "\n- Escudo(s)\n- Pulseira(s)\n- Colar(es)\n- Sapato(s)\n- Elmo(s)\n- Arma(s)\n- Armadura(s)");
  if (args.length === 0) return message.channel.send(embed);
  if (args.length === 1) {
    if (args[0].toLowerCase() == 'escudo' || args[0].toLowerCase() == 'escudos') {
      const emb = new Discord.RichEmbed()
        .setAuthor("Transmutações")
        .setColor([54, 57, 64])
        .setDescription("__**Escudos:**__"
                       + "\n\nEscudo Falcão :arrow_right: Escudo Universal"
                       + "\nEscudo Leão Angular :arrow_right: Escudo Divino");
      message.channel.send(emb);
    }
  }
}
