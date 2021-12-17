const express = require('express');
const applicationSchema = require('../models/application');
const router=express.Router();
//listar solicitudes
const getApplications = async () => {
    const applications = await applicationSchema.find();
    return applications;
};
router.get('/get_applications', async (req, res) => {
    try {
        res.json(await getApplications()); 
    } catch (error) {
        console.log(error);  
    }
});

//obtener solicitud especifica 
const getApplication = async (id) => {
    const application = applicationSchema.findById(id);
    return application;
};
router.get('/get_applications/:id_application',async (req, res) => {
    try {
        const id = req.params.id_application;
        res.json(await getApplication(id));
    } catch (error) {
        console.log(error); 
    }
});

//crear solicitud
router.post('/create_applications', async (req, res)=>{
    try {
        const application_data = req.body;
        const application = new applicationSchema(application_data)
        await application.save()
        res.json({
            mensaje: 'Solicitud creada correctamente'
        })
    } catch (error) {
        console.log(error);   
    }
});

//actualizar una solicitud
router.put('/update_applications/:id_application', async (req, res)=>{
    try {
        const id = req.params.id_application;
        const application_data = req.body;
        await applicationSchema.updateOne({ _id: id }, application_data);
        res.json({
            mensaje: 'Solicitud actualizada correctamente'
        })
    } catch (error) {
        console.log(error);   
    }
});

//Eliminar una solicitud
router.delete('/applications/:id', (req, res)=>{
    const {id}=req.params;
    userSchema
    .remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});
router.delete('/delete_applications/:id_application', async (req, res)=>{
    try {
        const id=req.params.id_application;
        const application = applicationSchema.findById(id)
        await application.deleteOne({_id:id})
        res.json({
            mensaje: 'Solicitud eliminada correctamente'
        })
    } catch (error) {
        console.log(error);  
    }
});

module.exports=router;
