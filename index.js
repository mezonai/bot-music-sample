const dotenv = require("dotenv");
const { MezonClient } = require("mezon-sdk");
dotenv.config(); 

const handleIntro = require("./commands/intro");
const handlePlay = require("./commands/play");

async function main() {
  const client = new MezonClient(process.env.APPLICATION_TOKEN); // Nếu bot trong Product thì dùng cái này
  // const client = new MezonClient(process.env.MEZON_TOKEN, process.env.HOST_DEV, process.env.PORT_DEV);
  const tokenObj = await client.login();
  
  client.onChannelMessage(async (event) => {
    const text = event?.content?.t?.toLowerCase();
    if (!text) return;

    if(text.startsWith("*intro")) {
      return handleIntro(client, event);
    }

    if (text.startsWith("*playmusic")) {
      return handlePlay(client, event);
    }

  });
}

main()
  .then(() => console.log("Bot is running"))
  .catch(console.error);