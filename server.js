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



// PUT: Sirve para actualizar información completa. Adjunto imagen

app.put("/comentarios/:posicion", (req, res) => {

    const posicionComentario = req.params.posicion;

    comentarios[posicionComentario] = {

        mensaje: req.body.mensaje

    };

    res.json({

        mensaje: "Comentario actualizado",

        datos: comentarios[posicionComentario]

    });

});



// PATCH: Sirve para actualizar SOLO una parte. Adjunto imagen

app.patch("/comentarios/:posicion", (req, res) => {

    const posicionComentario = req.params.posicion;

    if (comentarios[posicionComentario]) {

        comentarios[posicionComentario].mensaje =
        req.body.mensaje;

        res.json({

            mensaje: "Comentario modificado parcialmente",

            datos: comentarios[posicionComentario]

        });
    
    } else {

        res.status(404).json({

            mensaje: "Comentario no encontrado"
        });
    }
});


// DELETE: Sirve para eliminar información. Adjunto imagen

app.delete("/comentarios/:posicion", (req, res) => {

    const posicionComentario = req.params.posicion;

    if (comentarios[posicionComentario]) {

        comentarios.splice(posicionComentario, 1);

        res.json({

            mensaje: "Comentario eliminado"

        });

    } else {

        res.status(404).json({

            mensaje: "Comentario no encontrado"

        });
    }
});



// OPTIONS: Sirve para preguntar qué métodos permite el servidor. Adjunto imagen

app.options("/comentarios", (req, res) => {

    res.setHeader(
        "Allow",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );

    res.send("Métodos permitidos");
});


// HEAD: Sirve para obtener información de respuesta SIN contenido.

app.head("/videojuegos", (req, res) => {

    res.status(200).end();

});


// CONNECT: Sirve para crear conexiones seguras

app.connect("/conexion", (req, res) => {

    res.send("Conexión establecida con el servidor");

});



// TRACE: Sirve para diagnóstico y depuración.

app.trace("/rastreo", (req, res) => {

    res.send("TRACE ejecutando correctamente");

});


// CODIGOS DE ESTADO HTTP

// Sirven para decirle al cliente qué pasó con la petición.

// 200 - OK: Todo salió bien
// 201 - Created: Recurso creado correctamente
// 204 - No content: Todo salió bien pero no hay contenido
// 400 - Bad Request: La petición está mal hecha
// 401 - Unauthorized: No autorizado
// 403 - Forbidden: El servidor entendió la petición pero la prohíbe
// 404 - Not Found: Ruta no encontrada
// 500 - Internal Server Error: El servidor tuvo un error interno
// 503 - Service Unavailable: servidor no disponible
