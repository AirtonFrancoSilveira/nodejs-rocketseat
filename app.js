const express = require("express");

const app = express()

app.get("/primeira-rota", (req, res) => {
    return res.json({
        message: "Acessou a primeira Rota com Nodemon"
    })
})

app.listen(4003, () => console.log("Está rodando na porta 4003"))