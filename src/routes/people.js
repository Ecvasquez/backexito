const express = require('express');
const personSchema = require('../models/person');
const router=express.Router();
//listar todos los empleados
const getPeople = async () => {
    const people = await personSchema.find();
    return people;
};
router.get('/get_employees', async (req, res) => {
    try {
        res.json(await getPeople()); 
    } catch (error) {
        //res.json({message:error})
        console.log(error);  
    }
});

//obtener empleado por id
const getPerson = async (id) => {
    const person = personSchema.findById(id);
    return person;
};
router.get('/employees/:id_employee',async (req, res) => {
    try {
        const id = req.params.id_employee;
        res.json(await getPerson(id));
    } catch (error) {
        console.log(error); 
    }
});

//crear persona
router.post('/employees', async (req, res)=>{
    try {
        const person_data = req.body;
        const person = new personSchema(person_data)
        await person.save()
        res.json({
            mensaje: 'empleado creado correctamente'
        })
    } catch (error) {
        console.log(error);   
    }
});

//actualizar una persona
router.put('/employees/:id_employee', async (req, res)=>{
    try {
        const id = req.params.id_employee;
        const person_data = req.body;
        await personSchema.updateOne({ _id: id }, person_data);
        res.json({
            mensaje: 'empleado actualizado correctamente'
        })
    } catch (error) {
        console.log(error);   
    }
});

//borrar una persona
router.delete('/employees/:id_employee', async (req, res)=>{
    try {
        const id=req.params.id_employee;
        const employee = personSchema.findById(id)
        await employee.deleteOne({_id:id})
        res.json({
            mensaje: 'empleado eliminado correctamente'
        })
    } catch (error) {
        console.log(error);  
    }
});
module.exports=router;
