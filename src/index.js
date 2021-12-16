const express = require('express');
const app = express();
const port = 9000;
const userRoutes = require("./routes/users");
const personRoutes = require("./routes/persons");
const contractRoutes = require("./routes/contracts");
const applicationRoutes = require("./routes/applications");
app.use(express.json());
app.use('/api',userRoutes);
app.use('/api',personRoutes);
app.use('/api',contractRoutes);
app.use('/api',applicationRoutes);
require('dotenv').config();
//rutas
app.get('/',(req,res) => {
    res.send('Bienvenido API Exito');
    res.json({
        mensaje:'prueba'
    });
});
app.listen(port,()=>console.log('listening on port',port));
