const express = require("express");
const http = require('http')
const Cors = require("cors");
const Erro = require("../../middleware/erro");
const Anuncio = require("../other/Anuncio");
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
app.use(Cors())
app.use(express.json())
const io = new Server(server)
app.use('/Anuncio', new Anuncio().app)
app.use(Erro);

const client = []
const message = []
const proposta = []


io.on('connection', (socket) => {
    console.log('conection...')
    socket.on('select_room', (data) => {
        console.log('entrando.....', data.room)
        socket.join(data.room);
        let resultado = getMessage(data.room);
        io.to(data.room).emit('msg', resultado)
    })
    socket.on('msg', (data) => {
        console.log('..mensage', data)
        console.log(message)
        message.push(data)
        let resultado = getMessage(data.room);
        io.to(data.room).emit('msg', resultado)
    })
    socket.on('getList', (data) => {
        console.log(data)
        console.log('testeee', message)
        let resultado = getListMessage(data)
        console.log('resultado', resultado)
        io.emit('getList', resultado)
    })
    socket.on('delChat', (data) => {
        console.log('del', data)
         delChat(data.id, data.room);
         let resultado = getListMessage(data.id)
        io.emit('delChat', resultado)
    })
    socket.on('proposta', (data)=>{
        console.log('proposta recebida', data);
        if(data){
            proposta.push(data)
        }
        io.emit('proposta', proposta)
    })
})

let getMessage = (room) => {
    console.log(room)
    console.log('getmes', message)
    let result = message.filter(message => message.room === room)
    return result
}
let getListMessage = (id) => {
    console.log('getlist id ', id.id)
    console.log(message)
    let List = message.filter(message => message.id === '' + id.id + '');
    return List
}
let delChat = (id, room) => {
    // let list = message.filter(message=> message.room === room && message.id === id)
    let list = message.filter((messages, index, array) => {
        if (messages.room === room && messages.id === '' + id + '') {
            console.log(index, array, messages)
            return message.splice(index, 1)
        }
    })
}
// class MainRoute {
//   constructor() {
//     this.app = express();
//     this.Server = http.createServer(this.app)
//     this.middleware();
//     this.Routes();
//     this.Socket();
//     this.app.use(Erro);
//   }
//   middleware() {
//     this.app.use(Cors());
//     this.app.use(express.json());
//   }
//   Routes() {
//     this.app.use("/Anuncio", new Anuncio().app);
//   }
//   Socket(){
//       return this.io = new Server(this.Server);
//   }
// }
// module.exports = { 
//     MainRoute, 
//     io : new MainRoute().Socket()
// };

module.exports = server