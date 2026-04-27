const express = require('express');
const app = express();
app.use(express.json());

let pedidos = [];

app.get('/productos', (req, res) => {
    res.json([
        { nombre: "Pizza",       precio: 120 },
        { nombre: "Hamburguesa", precio: 90  },
        { nombre: "Ensalada",    precio: 70  },
        { nombre: "Refresco",    precio: 30  }
    ]);
});

app.post('/pedido', (req, res) => {
    const pedido = req.body;
    pedidos.push(pedido);
    res.json({ mensaje: "Pedido recibido", pedido });
});

app.get('/pedidos', (req, res) => {
    res.json(pedidos);
});

app.delete('/pedido/:id', (req, res) => {
    const id = req.params.id;
    pedidos.splice(id, 1);
    res.json({ mensaje: `Pedido ${id} eliminado` });
});

app.put('/pedido/:id', (req, res) => {
    const id = req.params.id;
    pedidos[id] = req.body;
    res.json({ mensaje: `Pedido ${id} actualizado`, pedido: pedidos[id] });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});
