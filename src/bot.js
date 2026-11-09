const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    const userId = ctx.from.id;
    const username = ctx.from.username || 'Usuario';
    
    ctx.replyWithHTML(`<b>¡Bienvenido a CipherX, ${username}!</b>\n\nTu capital, sincronizado con la élite.\n\nToca el botón de abajo para abrir tu dashboard y comenzar a ganar.`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: '⚡ Abrir CipherX', web_app: { url: process.env.APP_URL } }]
            ]
        }
    });
});

module.exports = { bot };
