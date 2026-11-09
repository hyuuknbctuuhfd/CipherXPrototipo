const express = require('express');
const db = require('./database');
const app = express();

app.use(express.json());

// Ruta de estado
app.get('/api/status', (req, res) => {
    res.json({ status: 'online', platform: 'CipherX', timestamp: new Date() });
});

// Ruta para obtener datos del usuario (simulada por ahora)
app.get('/api/user/:id', (req, res) => {
    const userId = req.params.id;
    // Aquí luego consultaremos a PostgreSQL
    res.json({
        id: userId,
        balance: 0.00,
        frozen_bonus: 50.00,
        daily_profit: 0.8,
        referrals: 0
    });
});

module.exports = app;
