const express = require("express")
require("dotenv").config()
const path = require("path")

const app = express()

app.use(express.static("public"))

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get("/clima", async (req, res) => {
    const cidade = req.query.cidade

    const chave = process.env.API_KEY
  
    const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`)
    const dados = await resposta.json()

    res.json(dados)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})