require("dotenv").config();
const mongoose = require('mongoose');
//mongodb conection
mongoose.connect(process.env.MONGODB_URI)
//mongoose.connect('mongodb+srv://admin:admin@cluster0.yimsn.mongodb.net/appExito?retryWrites=true&w=majority')
    .then(()=>console.log('Conectado a MongoDB Atlas'))
    .catch((error) => console.log(error));

module.exports = mongoose;