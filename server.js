// PETICIONES HTTP

// Permiten que frontend y backend se comuniquen para enviar y recibir información.
// Son mensajes que envía un cliente (como un navegador o una app) a un servidor para pedir o enviar información.

// Cliente: Navegador, aplicación, frontend
// Servidor: Node.js, Express, backend

// Los métodos HTTP indican QUÉ acción quiere hacer el cliente con la información del servidor.

// Sirven para: iniciar sesión, registrarse, mostrar productos, enviar formularios, guardar datos, obtener información de bases de bases de datos, APIs



// TIPOS DE PETICIONES

// GET: Sirve para obtener información. Adjunto imagen

const express = require("express");

const app = express();

app.use(express.json());

// RUTA GET

app.get("/videojuegos", (req, res) => {

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

app.listen(3000, () => {

    console.log("Servidor activo en http://localhost:3000");
});



// POST: Sirve para enviar o guardar información. Adjunto imagen

const comentarios = [];

app.post("/comentarios", (req, res) => {

    const nuevoComentario = {

        mensaje: req.body.mensaje

    };

comentarios.push(nuevoComentario);

res.json({

    mensaje: "Comentario guardado",

    datos: nuevoComentario

});

});

// GET COMENTARIOS

app.get("/comentarios", (req, res) => {

    res.json(comentarios);

});

// PRINCIPAL

app.get("/", (req, res) => {

    res.send("Servidor funcionando");

});



// PUT: Sirve para actualizar información completa.







// PATCH: Sirve para actualizar SOLO una parte
// DELETE: Sirve para eliminar información
// OPTIONS: Sirve para preguntar qué métodos permite el servidor
// HEAD: Sirve para obtener información de respuesta SIN contenido.
// CONNECT: Sirve para crear conexiones seguras
// TRACE: Sirve para diagnóstico y depuración.



