if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

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

  socket.on("sendChat", (payload) => {
    arrOfChats.push(payload)

    console.log(payload)

    io.emit("chat", arrOfChats)
  })
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const route = require("./routes")
app.use(route)

httpServer.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

