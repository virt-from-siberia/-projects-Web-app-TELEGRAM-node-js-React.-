const TelegramBot = require('node-telegram-bot-api');

const token = '5648242516:AAFqEc3U8uFS2EqVdtMDIzXokqt-3IcwTYU'
const webAppUrl = 'https://ya.ru'
const bot = new TelegramBot(token, {polling: true});


// bot.onText(/\/echo (.+)/, (msg, match) => {
//
//   const chatId = msg.chat.id;
//   const resp = match[1];
//   bot.sendMessage(chatId, resp);
// });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
      reply_markup: {
        keyboard: [
          [{text: 'Запеолните форму , web_app: {url: webAppUrl}'}]
        ]
      }
    })

    await bot.sendMessage(chatId, 'Заходи в наш интернет магазин по кнопке ниже', {
      reply_markup: {
        inline_keyboard: [
          [{text: 'Сделать заказ', web_app: {url: webAppUrl}}]
        ]
      }
    })
  }

  bot.sendMessage(chatId, 'Received your message');
});


