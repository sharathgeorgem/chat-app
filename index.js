const app = require('express')()
const http = require('http').Server(app)
const path = require('path')
const io = require('socket.io')(http)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

io.on('connection', function (socket) {
  console.log('A user connected')
  socket.on('chat message', function (msg) {
    console.log('Message: ' + msg)
  })
  socket.on('disconnect', function () {
    console.log('User disconnected')
  })
})

http.listen(5000, function () {
  console.log('Listening on port 5000')
})
