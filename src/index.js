const express = require("express");
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(require("./routes/index"));

app.listen(8000);
console.log("Hola gordito estoy encendido en el puerto 5432 jiji");
