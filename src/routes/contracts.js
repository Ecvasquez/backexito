const express = require('express');
const contractSchema = require('../models/contract');
const router=express.Router();
//listar contratos 
router.get('/contracts',(req, res) => {
    contractSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

//obtener usuario especifico 
router.get('/contracts/:id',(req, res) => {
    const {id}=req.params;
    contractSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

//crear contrato
router.post('/contracts', (req, res)=>{
    const contract = userSchema(req.body);
    contract.save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

//actualizar un contrato
router.put('/contracts/:id', (req, res)=>{
    const {id}=req.params;
    const {name,age,email}=req.body;
    userSchema
    .updateOne({_id:id},{ $set:{name,age,email}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

//eliminar un contrato
router.delete('/contracts/:id', (req, res)=>{
    const {id}=req.params;
    userSchema
    .remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

module.exports=router;
