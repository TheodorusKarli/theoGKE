'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send(`
        Nama saya Theodorus Karli <br/>
        NIM: 51019020 <br/>
        Jurusan Sistem Informasi <br/><br/>
    `)
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
