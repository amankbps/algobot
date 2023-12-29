
const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')
/*
   HOW to get the secret token for creating a bot?
   ->open telegram and search botfather
   ->to read instrustion type /start.
   ->to create a new bot type /newbot.
   ->it will ask for bot name,give a bot name wihtout a / eg. algobot.
   ->then it ask to choose unique username to your bot.
   -> link of my bot https://t.me/algosolutionbot.


*/
const bot=new Telegraf('6908806214:AAF_WDkj2mWxfBESN6UiiQPjas1QQpuOY98');

bot.start((ctx) => ctx.reply('Welcome to the AlgoBot from Aman'));

bot.on(message('sticker'), (ctx) => ctx.reply('❤️'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

bot.launch();
