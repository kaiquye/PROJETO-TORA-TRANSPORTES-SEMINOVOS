const { io } = require("../routers/main");

io.on("connection", socket => {
    console.log('Conectado...')
})