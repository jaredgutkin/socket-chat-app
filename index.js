const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
const http = require('http').Server(app)

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res)=>{
    res.sendFile('index.html')
})

http.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})
