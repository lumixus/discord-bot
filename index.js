import dotenv from "dotenv";
import discord from "discord.js";
import express from "express";


const config = dotenv.config();
const port = config.parsed.PORT || 70;
const app = express();
const client = new discord.Client();



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });


  client.login(process.env.TOKEN);





  client.on('message', msg => {
    switch (msg.content.toLowerCase()) {
      case 'muhammet':
        msg.reply('A');
        break;
      case 'taner':
        msg.reply('B');
        break;
        case 'faruk':
          msg.reply('C');
          break;
    
      default:
        break;
    }

  });







app.get("/",(req,res) => {

res.send(req.body);

})



app.listen(port, () => {
    console.log("Listening on " + port);
})