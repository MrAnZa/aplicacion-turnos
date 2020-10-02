var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('SERVIDOR CONECTADO');
})


socket.on('disconnect', function() {
    console.log('SERVIDOR DESCONECTADO');
})

socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
})

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
})