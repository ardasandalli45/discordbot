const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = 's+'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Aleykum selam yegenim');
  }
});

client.on('message', msg => {
  if (msg.content === 'naber') {
    msg.reply('iyi sen');
  }

});

client.on('message', msg => {
  if (msg.content === prefix + 'yasuo') {
    msg.reply('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f0b03e51888191.58fdce861e942.gif');
  }

});

client.on('message', msg => {
  if (msg.content === prefix + 'camille') {
    msg.reply('https://mir-s3-cdn-cf.behance.net/project_modules/disp/1b7add51405361.58ecb890c8e07.gif');
  }

});

client.on('message', msg => {
  if (msg.content === prefix + 'xayah') {
    msg.reply('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/74bbdd51651785.58f5c7c575749.gif');
  }

});

client.on('message', msg => {
  if (msg.content === prefix + 'sil') {
    msg.delete('message');
  }

});

client.on('message', msg => {
  if (msg.content === prefix + 'pp') {
    msg.channel.send(msg.author.avatarURL);
  }

});

client.on('message', msg => {
  if (msg.content === prefix + 'braum') {
    msg.reply('https://cdn.dribbble.com/users/1253928/screenshots/4037942/braum-_dribble_-800x600.gif');
  }

});

client.on('message', msg => {
  if (msg.content === prefix + 'sion') {
    msg.reply('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ad0a0f51405303.58ecb81ce46a3.gif');
  }

});

client.on('message', msg => {
  if (msg.content === prefix + 'ornn') {
    msg.reply('https://cdn.dribbble.com/users/1253928/screenshots/4034605/ornn-_dribbble_-800x600.gif');
  }

});

client.on('message', msg => {
  if (msg.content === prefix + 'ahri') {
    msg.reply('https://mir-s3-cdn-cf.behance.net/project_modules/disp/c56b3346954299.586bc2232f948.gif');
  }

});

client.on('message', msg => {
  if (msg.content === prefix + 'nah') {
    msg.reply('https://i.ytimg.com/vi/onDjXNRr2EI/mqdefault.jpg');
  }

});

client.on('message', msg => {
  if (msg.content === prefix + 'sik') {
    msg.reply('seni 30 cm damarlý sikti ve çok zevkli oldugu soyleniyor.@everyone');
  }

});

client.on('message', msg => {
  if (msg.content === prefix + 'sakso') {
    msg.reply('sana kusturmali bosnak saksosu cekti az daha boguluyordun gluk gluk agzin yuzun dol oldu ogghhk.@everyone');
  }

});

client.on('message', msg => {
  if (msg.content === prefix + 'tor') {
    msg.reply('https://media.giphy.com/media/EOfarA6ZUqzZu/giphy.gif');
  }

});

client.on('message', msg => {
  if (msg.content === prefix + 'gandal') {
    msg.reply('https://media.giphy.com/media/WLIerIoiUJL1K/giphy.gif');
  }

});

client.on('message', msg => {
  if (msg.content === prefix + 'crazy') {
    msg.reply('https://media1.tenor.com/images/b5a9f1e9bf32dcb5d338c3fadead5e3e/tenor.gif?itemid=5785816');
  }

});

client.on('message', msg => {
  if (msg.content === prefix + 'teemo') {
    msg.reply('https://media.giphy.com/media/RC68eeKyo7hOo/giphy.gif');
  }

});

client.on('message', msg => {
  if (msg.content === prefix + 'hz') {
    msg.reply('https://steamusercontent-a.akamaihd.net/ugc/257085147024653412/4CAE59CF068AADC3F8CEFBE5EE4FD17512D38190/');
  }

});

client.on('message', msg => {
  if (msg.content === prefix + 'sneaky') {
    msg.reply('https://media1.giphy.com/media/mfFUNniT3OoN2/giphy-downsized.gif');
  }

});

client.on('message', msg => {
  if (msg.content === prefix + 'help') {
    msg.reply('BazI silent bot komutlarý : s+camille, s+xayah, s+braum, s+ornn, s+ahri, s+pp, s+nah, s+sik, s+sakso, s+gandal, s+tor, s+crazy, s+sneaky');
  }

});
client.login('NTAyMjA0NTUyODI5ODYxODk4.DqkjOA.27317EkJY6rma2FoAQ5V6Yai24E');