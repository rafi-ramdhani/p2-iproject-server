const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const route = require("./routes")
app.use(route)

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})