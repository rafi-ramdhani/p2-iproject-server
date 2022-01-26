const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")
const { createServer } = require("http")
const { Server } = require('socket.io')
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: "*"
  }
})

let arrOfChats = []

io.on("connection", (socket) => {
  console.log("User connected", socket.id)

  socket.on("disconnect", () => {
    console.log("User disconnected")
  })

  socket.on("sendMessageToServer", (payload) => {
    arrOfChats.push(payload)

    console.log(arrOfChats)

    io.emit("chat", arrOfChats)
  })

  socket.on("refresh", () => {
    console.log('hai')

    socket.emit("helo")
  })
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const route = require("./routes")
app.use(route)

httpServer.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

