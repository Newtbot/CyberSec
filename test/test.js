//export the client 
module.exports =  function(client) {
// bot message event reply test case 
client.on('messageCreate', message => {
    if (message.content === 'ping') {
        message.reply('Pong!');
    }
});
}


