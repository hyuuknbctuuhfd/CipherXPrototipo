const tg = window.Telegram.WebApp;
tg.expand();

// Cargar datos del usuario de Telegram
const user = tg.initDataUnsafe?.user;
if (user) {
    document.getElementById('user-name').innerText = user.first_name + (user.last_name ? ' ' + user.last_name : '');
    document.getElementById('user-id').innerText = 'ID: ' + user.id;
    
    if (user.photo_url) {
        document.getElementById('user-avatar').src = user.photo_url;
    }
}

// Función para copiar el ID
function copiarID() {
    const id = tg.initDataUnsafe?.user?.id;
    if (id) {
        navigator.clipboard.writeText(id).then(() => {
            tg.showAlert('✅ ID copiado. Envíalo al administrador para acreditarte el saldo.');
        });
    }
}

// Simular cambio de rendimiento diario
const randomProfit = (Math.random() * (1.2 - 0.4) + 0.4).toFixed(1);
document.getElementById('daily-profit').innerText = '+' + randomProfit + '%';
