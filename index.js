const express = require('express')

const PORT = process.env.PORT || 3000
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

//middleware
app.use(express.static(__dirname + '/public'))

//serves up home page
app.get('/', (req, res)=>{
    res.sendFile('index.html')
})


io.on('connection', (socket)=>{
    socket.on('user_join', (data)=>{
        this.username = data
        socket.broadcast.emit('user_join', data)
    })

    socket.on('chat_message', (data)=>{
        data.username = this.username
        socket.broadcast.emit('chat_message', data)
    })

    socket.on('disconnect', (data)=>{
        socket.broadcast.emit('user_leave', this.username)
    })
})

//connect to server
http.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})
