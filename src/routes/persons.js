const express = require('express');
const personSchema = require('../models/person');
const router=express.Router();
//listar todos los empleados
const getPersons = async () => {
    const persons = await personSchema.find();
    return persons;
};
router.get('/get_employees', async (req, res) => {
    try {
        res.json(await getPersons()); 
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
router.get('/get_employees/:id_employee',async (req, res) => {
    try {
        const id = req.params.id_employee;
        res.json(await getPerson(id));
    } catch (error) {
        console.log(error); 
    }
});

//crear persona
router.post('/create_employees', async (req, res)=>{
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
router.put('/update_employees/:id_employee', async (req, res)=>{
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
router.delete('/delete_employees/:id_employee', async (req, res)=>{
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
