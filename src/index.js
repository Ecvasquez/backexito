const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require("./routes/users");
const personRoutes = require("./routes/people");
const contractRoutes = require("./routes/contracts");
const applicationRoutes = require("./routes/applications");
const port = process.env.PORT || 8000;
const cors_config={
    origin:'*'
};
app.use(express.json());
app.use('/api',cors(cors_config),userRoutes);
app.use('/api',cors(cors_config),personRoutes);
app.use('/api',cors(cors_config),contractRoutes);
app.use('/api',cors(cors_config),applicationRoutes);
require('dotenv').config();

//rutas
app.use('/',cors(cors_config),(req,res) => {
    //res.send('Bienvenido API Exito');
    res.json({
        mensaje:'prueba'
    });
});
app.listen(port,()=>console.log('listening on port',port));
