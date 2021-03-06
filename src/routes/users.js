const express = require('express');
const userSchema = require('../models/user');
const router=express.Router();
//listar usuarios 
const getUsers = async () => {
    const users = await userSchema.find();
    return users;
};
router.get('/users', async (req, res) => {
    try {
        res.json(await getUsers()); 
    } catch (error) {
        //res.json({message:error})
        console.log(error);  
    }
});

//obtener usuario especifico 
const getUser = async (id) => {
    const person = userSchema.findById(id);
    return person;
};
router.get('/users/:id_user',async (req, res) => {
    try {
        const id = req.params.id_user;
        res.json(await getUser(id));
    } catch (error) {
        console.log(error); 
    }
});
//obtener ultimo usuario 
const getLastUser = async () => {
    const user = userSchema.findOne().sort({'_id':-1});
    return user;
};
router.get('/lastuser',async (req, res) => {
    try {
        res.json(await getLastUser());
    } catch (error) {
        console.log(error); 
    }
});

//crear usuario
router.post('/users', async (req, res)=>{
    try {
        const user_data = req.body;
        const user = new userSchema(user_data)
        await user.save()
        res.json({
            mensaje: 'usuario creado correctamente'
        })
    } catch (error) {
        console.log(error);   
    }
});

//actualizar un usuario
router.put('/users/:id_user', async (req, res)=>{
    try {
        const id = req.params.id_user;
        const user_data = req.body;
        await userSchema.updateOne({ _id: id }, user_data);
        res.json({
            mensaje: 'usuario actualizado correctamente'
        })
    } catch (error) {
        console.log(error);   
    }
});

//Eliminar un usuario
router.delete('/users/:id_user', async (req, res)=>{
    try {
        const id=req.params.id_user;
        const user = userSchema.findById(id)
        await user.deleteOne({_id:id})
        res.json({
            mensaje: 'usuario eliminado correctamente'
        })
    } catch (error) {
        console.log(error);  
    }
});

module.exports=router;
