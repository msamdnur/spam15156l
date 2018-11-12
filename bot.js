const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
        client.user.setActivity("spam",{type: 'WATCHING'});

});


client.on('warn', console.warn);

client.on('error', console.error);



client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


client.on('message', message => {
if(message.content.startsWith('sp2')) {
if(message.author.id !== "455108784579149835") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});

client.on('ready', async() => {
  var server = "511540931753672704"; // ايدي السررفر
  var channel = "511540931753672704";//ايدي الروم
      setInterval(()=>{
      client.guilds.get(server).channels.get(channel).send('**puuy spam , puuy spam, puuy spam , puuy spam , puuy spam , puuy spam, puuy spam , puuy spam , puuy spam , puuy spam , puuy spam , puuy spam , puuy spam , puuy spam , puuy spam , puuy spam, puuy spam , puuy spam , **')
      },305);
    });



client.login("NTExNTQ4MjUzNTIzNjczMTE4.DssmiQ.8b4XfPPqlF0VT3z8IRBmjXarVnY");
