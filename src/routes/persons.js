const express = require('express');
const personSchema = require('../models/person');
const router=express.Router();
//listar personas 
router.get('/employees',(req, res) => {
    personSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

//obtener persona especifica
router.get('/employees/:id',(req, res) => {
    const {id}=req.params;
    userSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

//crear persona
router.post('/employees', (req, res)=>{
    const person = personSchema(req.body);
    person.save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

//actualizar una persona
router.put('/employees/:id', (req, res)=>{
    const {id}=req.params;
    const {document,name,lastname,gender,birthDate,birthCity,telephone,direction,residenceCity,email,bank,accountType,accountNumber}=req.body;
    personSchema
    .updateOne({_id:id},{ $set:{document,name,lastname,gender,birthDate,birthCity,telephone,direction,residenceCity,email,bank,accountType,accountNumber}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

//borrar una persona
router.delete('/employees/:id', (req, res)=>{
    const {id}=req.params;
    personSchema
    .remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

module.exports=router;
