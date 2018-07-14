const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  const embed = Discord.RichEmbed()
    .setAuthor("Transmutações!")
    .setColor([54, 57, 64])
    .setDescription("Veja as transmutações, usando `!transmutações <tópico>`"
                   + "\n\n__**Tópicos:**__"
                   + "\n- Escudo(s)\n- Pulseira(s)\n- Colar(es)\n- Sapato(s)\n- Elmo(s)\n- Arma(s)\n- Armadura(s)");
  message.channel.send(embed);
}
