const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');


const app = express();
dotenv.config();
const cEnv = process.env

app.get('/', (req, res) => {
    res.send("Hello My Nodejs work")
})
app.get('/api/notes', (req, res) => {
    res.json(notes)
})
app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((n) => n.id === req.params.id)
    console.log(req.params.id);
    res.json(note)
})
app.listen(cEnv.PORT || 5000 , console.log(`Server is running on ${cEnv.PORT}`))