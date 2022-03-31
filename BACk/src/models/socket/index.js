

class Socket {

    constructor() {
        this.Mensagems = new Array();
    }

    getMensagem() {
        return this.Mensagems;
    }

    setMensagem({ msg, room, user, id }) {
        this.Mensagems.push({ msg: msg, room: room, user: user, id: id })
    }

    getMensagemByRoom = (room) => {
        console.log(room)
        let result = this.Mensagems.filter(message => message.room === room)
        return result
    }

    getListMessage = (id) => {
        let List = this.Mensagems.filter(message => message.id === '' + id.id + '');
        return List
    }

    delChat = (id, room) => {
        // let list = message.filter(message=> message.room === room && message.id === id)
        let list = this.Mensagems.filter((messages, index, array) => {
            if (messages.room === room && messages.id === '' + id + '') {
                console.log(index, array, messages)
                return this.Mensagem.splice(index, 1)
            }
        })
    }

}

module.exports = Socket