const webSocket = require("ws").Server
const wss = new webSocket({port:3100})

let clients = []

wss.on("connection",(connection) => {
    clients.push(connection)

    connection.on("message", (message) => {
        const data = JSON.parse(message)
        clients.forEach(client => {
            client.send(JSON.stringify(data))
        })
    })
})

console.log("running on 3100")