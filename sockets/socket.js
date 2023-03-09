const { io } = require('../index');

//Mensajes del server
io.on('connection', client => {
    console.log('Client connected');

    client.on('disconnect', () => { console.log('Client disconnected') });

    client.on('mensaje', (payload) => {
        console.log('Mensaje', payload);

        io.emit('Mensaje', { admin: 'Nuevo Mensaje' });
    });
});
