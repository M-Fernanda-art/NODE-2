// GET

const express = require("express");

const appServidor = express();

// RUTA GET

appServidor.get("/videojuegos", (req, res) => {

    const listaVideojuegos = [
        {
            nombre: "Minecraft",
            categoria: "sandbox"
        },
        {
            nombre: "Fortnite",
            categoria: "Battle Royale"
        },
        {
            nombre: "FIFA",
            categoria: "Deportes"
        }
    ];

    res.json(listaVideojuegos);
});

// SERVIDOR

appServidor.listen(3000, () => {

    console.log("Servidor activo en http://localhost:3000");
});