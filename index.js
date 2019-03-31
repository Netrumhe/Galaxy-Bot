const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTU5OTE2NTUxNTkxOTUyMzkz.D3sbgg.s2eawuuc2TzgLP_nN5rRfdoiIPQ';

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if(!channel) return;

    channel.send(`Welcome to Galaxy Studios Server, ${member}, please read and follow rules provided in the server rules channel!`)

});

bot.on('message', message=>{
   
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
        message.reply('pong!');
        break;
        case 'pong':
        message.reply('ping!');
        break;
        
                
    }
        

})

bot.login(token);