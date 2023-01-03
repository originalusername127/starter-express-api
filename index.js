const express = require('express')
const discord = require('discord.js')
const dotenv = require('dotenv')
const app = express()
const client = new discord.Client({
    intents: [discord.GatewayIntentBits.Guilds, discord.GatewayIntentBits.GuildMessages]
})
dotenv.config()

app.get('/', (req, res) => {
    res.send("GO AWAY")
})
app.listen(3000)
client.login(process.env.Token)
