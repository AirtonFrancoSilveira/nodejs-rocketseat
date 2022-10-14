const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "application/json"});

    if (req.url === "/produto") {
        res.end(JSON.stringify({
            message: "Rota de Produtos"
        }))
    }

    if (req.url === "/users") {
        res.end(JSON.stringify({
            message: "Rota de Users"
        }))
    }
    res.end(JSON.stringify({
        message: "ERROR - Definir rota Correta",
}))
}).listen(4002, () =>
    console.log("Servidor esta na porta 4002")
)