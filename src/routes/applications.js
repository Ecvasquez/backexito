const express = require('express');
const applicationSchema = require('../models/application');
const router=express.Router();
//listar usuarios 
router.get('/applications',(req, res) => {
    applicationSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

//obtener solicitud especifica 
router.get('/applications/:id',(req, res) => {
    const {id}=req.params;
    applicationSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

//crear solicitud
router.post('/applications', (req, res)=>{
    const application = applicationSchema(req.body);
    application.save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

//actualizar una solicitud
router.put('/applications/:id', (req, res)=>{
    const {id}=req.params;
    const {name,age,email}=req.body;
    userSchema
    .updateOne({_id:id},{ $set:{name,age,email}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

//actualizar una solicitud
router.delete('/applications/:id', (req, res)=>{
    const {id}=req.params;
    userSchema
    .remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

module.exports=router;
