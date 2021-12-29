const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const users = []
const port = 3001

app.get('/', (req, res) => {
    res.send('Hello World')
})

const addUser = (userName, roomId) => {
    users.push({
        userName: userName,
        roomId: roomId
    })
}

const userLeave = (userName) => {
    users = users.filter(user => user.Name != userName)
} 

const getRoomUsers = (roomId) => {
    return users.filter(user => user.roomId === roomId)
}

io.on('connection', socket => {
    console.log('Someone Connected')
    socket.on('join-room', ({ roomId, userName }) => {
        console.log('User Joined room')
        console.log(roomId)
        console.log(userName)
        console.join(roomId)
        addUser(userName, roomId)
        console.to(roomId).emit('user-connected', userName)
    
        io.to(roomId).emit('all-users', getRoomUsers(roomId))
    
        socket.on('disconnect', () => {
            console.log('disconnected')
            socket.leave(roomId)
            userLeave(userName)
            io.to(roomId).emit('all-users', getRoomUsers(roomId))
        })
    })
})

server.listen(port, () => {
    console.log('Zoom Clone API listening on localhost:3001')
})