const express = require("express");
const http = require('http')
const Cors = require("cors");
const Erro = require("../../middleware/erro");
const Anuncio = require("../other/Anuncio");
const { Server } = require('socket.io')
const SocketModel = require('../../models/socket/index')

const app = express()
const server = http.createServer(app)
app.use(Cors())
app.use(express.json())
const io = new Server(server)
app.use('/Anuncio', new Anuncio().app)
app.use(Erro);

const proposta = []
const ModelSocket = new SocketModel();

io.on('connection', (socket) => {
    console.log('conection...')
    socket.on('select_room', (data) => {
        socket.join(data.room);
        let resultado = ModelSocket.getMensagemByRoom(data.room);
        io.to(data.room).emit('msg', resultado)
    })
    socket.on('msg', (data) => {
        ModelSocket.setMensagem(data);
        let resultado = ModelSocket.getMensagemByRoom(data.room);
        io.to(data.room).emit('msg', resultado)
    })
    socket.on('getList', (data) => {
        let resultado = ModelSocket.getListMessage(data)
        io.emit('getList', resultado)
    })
    socket.on('delChat', (data) => {
        ModelSocket.delChat(data.id, data.room);
        let resultado = ModelSocket.getListMessage(data.id)
        io.emit('delChat', resultado)
    })
    socket.on('proposta', (data) => {
        if (data) {
            proposta.push(data)
        }
        io.emit('proposta', proposta)
    })
})
module.exports = server