const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const {getAllHeros} = require('./ctrl.js')

app.get("/api/heros",getAllHeros)

app.listen(4500, ()=> console.log('SERVER RUNNING ON PORT 4500'))