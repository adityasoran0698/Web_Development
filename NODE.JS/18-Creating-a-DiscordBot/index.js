import { Client, GatewayIntentBits } from "discord.js";
import shortid from "shortid";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

mongoose.connect(process.env.MONGO_URL);

const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
  },
  redirectURL: {
    type: String,
    required: true,
  },
});

const Url = mongoose.model("Url", urlSchema, "urls");

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1]?.trim();
    message.reply({
      content: "Generating a Short Id for: " + url,
    });

    const findUser = async (url) => {
      const user = await Url.findOne({ redirectURL: url });
      return user;
    };

    findUser(url).then(async (user) => {
      if (user) {
        message.reply({
          content: "ShortId Already Exists: " + user.shortId,
        });
      } else {
        const shortId = shortid();
        await Url.create({ shortId, redirectURL: url });
        message.reply({
          content: "New ShortId Created: " + shortId,
        });
      }
    });
  } else {
    message.reply({
      content: "Hi from Bot",
    });
  }
});

client.on("interactionCreate", (interaction) => {
  interaction.reply({
    content: "Pong!!",
  });
});

client.login(process.env.DISCORD_BOT_TOKEN);
