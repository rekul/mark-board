

import React, { useState, useEffect } from 'react'
import Discord from 'discord.js'
const Bot = props => {
    const client = new Discord.Client();
    const [connected, setConnected] = useState(false);
    const [channel, setChannel] = useState(undefined);

    useEffect(() => {
        if(connected) return;
        if(!client) return;
        console.log('BOT BOOTING UP!');
        client.once('ready', () => {
            console.log('BOT READY!');
        });
        client.on('message', message => {
            if(message.author.id !== process.env.BOT_AUTHOR_ID){
                console.log('message recieved: ', message);
                setChannel(message.channel)
            }
          
        });
        client.login(process.env.BOT_TOKEN).then( () => {
            setConnected(true);
            console.log('BOT CONNECTED!', client);
        });
        
    }, [client, connected])

    useEffect(()=>{
        if(!connected) return;
        if(!channel) return;
        console.log('channel', channel)
        channel.send(props.lastClickedWord);
    }, [props.lastClickedWord])

    return (
        <div className={`Bot`}>
        </div>
    )
}

export default Bot