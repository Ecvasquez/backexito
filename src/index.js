const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require("./routes/users");
const personRoutes = require("./routes/people");
const contractRoutes = require("./routes/contracts");
const applicationRoutes = require("./routes/applications");
const port = process.env.PORT || 8000;
const cors_config={
    origin:'*'
};
const jsonParser = bodyParser.json();
const urlencode = bodyParser.urlencoded({extended:false});

app.use(express.json());
app.use('/api',cors(cors_config),jsonParser,userRoutes);
app.use('/api',cors(cors_config),jsonParser,personRoutes);
app.use('/api',cors(cors_config),jsonParser,contractRoutes);
app.use('/api',cors(cors_config),jsonParser,applicationRoutes);
require('dotenv').config();

//rutas
app.use('/',cors(cors_config),jsonParser,(req,res) => {
    res.json({
        mensaje:'prueba'
    });
});
app.listen(port,()=>console.log('listening on port',port));
