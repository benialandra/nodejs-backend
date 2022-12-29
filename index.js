const express = require('express')
const BodyParser = require('body-parser')
const app = express()
const port = 8008
const db = require('./connection')
const response = require('./response')


app.use(BodyParser.json())

app.get('/', (req, res) => {
    const sql = "select * from mahasiswa"
    db.query(sql, (error, result) => {
        response(200, result, "get all data", res)
    })
})
app.get('/find', (req, res) => {
    const sql = `SELECT * FROM MAHASISWA WHERE NIM = ${req.query.nim}`
    db.query(sql, (error, result) => {
        response(200, result, "find data", res)
    })
})
app.post('/login', (req, res) => {
    console.log({ requestFromOutside: req.body })
    const username = req.body.username
    if (username === usernameFromDbExists) {
        res.status(400).send("username already exists")
    }
    res.send('berhasil login')
})
app.put('/username', (req, res) => {
    console.log({ updateData: req.body })
    res.send('update berhasil')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})