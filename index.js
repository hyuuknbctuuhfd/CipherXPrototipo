require('dotenv').config();
const express = require('express');
const path = require('path');
const { bot } = require('./src/bot');
const app = require('./src/server');

const PORT = process.env.PORT || 3000;

// Servir la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para la Mini App
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Encender el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor CipherX corriendo en puerto ${PORT}`);
});

// Encender el bot de Telegram
bot.launch().then(() => {
    console.log('🤖 Bot de Telegram iniciado');
}).catch(err => {
    console.error('Error al iniciar el bot:', err);
});
