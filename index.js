
    laconfig = require("./laconfig.json");
    const token = process.env.token;
    const Discord = require("discord.js");
    const robot = new Discord.Client();
    
    robot.on("ready", () => {
        robot.user.setPresence({
            game: { 
                name: '-verify',
                type: 'WATCHING'
            },
            status: "dnd"
        })
      });
    
      robot.on("message", async message => {
        if(message.author.robot) return;
        if(message.channel.type === "dm") return;
      
        let prefix = laconfig.prefix
   
        let cmd = messageArray[0]
        let args = messageArray.slice(1);


          
        if(cmd === `${prefix}verify`){
        
        let pMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]) ;
        if(!pMember) return message.reply("Couldn't find rhat user, yo.");
        
        let gRole = message.guild.roles.find(`name`, "verify")
        await(pMember.addRole(gRole.id));
        if(!gRole) return message.reply("Couldn't find that role.");;
    
        
    
        try{
        await    pMember.send(`Congrats to <@${pMember.id}> You verify account`);
        }catch(e){
        message.channel.send(`Congrats to <@${pMember.id}> you verify account!`);
        }
            
    
      
    }
    if(cmd === `${prefix}test`){
        message.reply("TEst here")
    }
});


    
    



 

robot.login(token);
