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
        .setDescription("__**Elmos:**__"
                       + "\n\n<:Elmo_Condestavel:467681134986395658> Elmo Condestável :arrow_right: Elmo Pacífico"
                       + "\n<:Capuz_Ara:467681134663434261> Capuz Aranha :arrow_right: Capuz Oricalcus"
                       + "\n<:Chapeu_Das_Alm:467681134910636062> Chapéu das Almas :arrow_right: Elmo da Dor"
                       + "\n<:Elmo_Mag:467681134940127242> Elmo Mágico :arrow_right: Elmo Destemido")
      .setTimestamp();
      message.channel.send(emb);
    }
    if (args[0].toLowerCase() == 'arma' || args[0].toLowerCase() == 'armas') {
      const emb = new Discord.RichEmbed()
        .setAuthor("Transmutações", message.guild.iconURL)
        .setColor([54, 57, 64])
        .setDescription("__**Armas:**__"
                       + "\n\nEspada de Batalha :arrow_right: Espada Sirius :arrow_right: Espada Rúnica :arrow_right: Espada Necro"
                       + "\nPartidário :arrow_right: Lâmina Solar :arrow_right: Lâmina Necro"
                       + "\nLâmina Zanna Fantasma :arrow_right: Espada Sagrada :arrow_right: Lâmina Dente do Paraíso :arrow_right: Espada Necro"
                       + "\nArco Paraíso Amarelo :arrow_right: Arco Elementar :arrow_right: Arco Fénix :arrow_right: Arco Necro"
                       + "\nLeque da Salvação :arrow_right: Leque do Demónio :arrow_right: Leque do Dragão :arrow_right: Leque Necro"
                       + "\nFaca Paraíso :arrow_right: Adaga Gemea Lunar :arrow_right: Lâmina 5 Elementos :arrow_right: Adaga Necro"
                       + "\nCampainha Céu e Terra :arrow_right: Campainha do Dragão :arrow_right: Campainha do Coração :arrow_right: Campainha Necro")
      .setTimestamp();
      message.channel.send(emb);
    }
    if (args[0].toLowerCase() == 'armadura' || args[0].toLowerCase() == 'armaduras') {
      const emb = new Discord.RichEmbed()
        .setAuthor("Transmutações", message.guild.iconURL)
        .setColor([54, 57, 64])
        .setDescription("__**Armaduras:**__"
                       + "\n\nArmadura de Aço Preto :arrow_right: Armadura Dragão Azul :arrow_right: Armadura Diabo :arrow_right: Warrior Necro"
                       + "\nQuimono Vento Preto :arrow_right: Quimono Dragão Azul :arrow_right: Quimono Lorde Dragão :arrow_right: Ninja Necro"
                       + "\nArmadura Magia Negra :arrow_right: Armadura Aura Negra :arrow_right: Armadura de Ossos :arrow_right: Sura Necro"
                       + "\nRobe Preto :arrow_right: Robe do Dragão :arrow_right: Roupas Douradas :arrow_right: Xamã Necro")
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
