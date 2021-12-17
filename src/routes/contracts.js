const express = require('express');
const contractSchema = require('../models/contract');
const router=express.Router();
//listar todos contratos 
const getContracts = async () => {
    const contracts = await contractSchema.find();
    return contracts;
};
router.get('/get_contracts', async (req, res) => {
    try {
        res.json(await getContracts()); 
    } catch (error) {
        //res.json({message:error})
        console.log(error);  
    }
});
//obtener contrato especifico 
const getContract = async (id) => {
    const contract = contractSchema.findById(id);
    return contract;
};
router.get('/get_contracts/:id_contract',async (req, res) => {
    try {
        const id = req.params.id_contract;
        res.json(await getContract(id));
    } catch (error) {
        console.log(error); 
    }
});

//crear contrato
router.post('/create_contracts', async (req, res)=>{
    try {
        const contract_data = req.body;
        const contract = new contractSchema(contract_data)
        await contract.save()
        res.json({
            mensaje: 'contrato creado correctamente'
        })
    } catch (error) {
        console.log(error);   
    }
});

//actualizar un contrato
router.put('/update_contracts/:id_contract', async (req, res)=>{
    try {
        const id = req.params.id_contract;
        const contract_data = req.body;
        await contractSchema.updateOne({ _id: id }, contract_data);
        res.json({
            mensaje: 'Contrato actualizado correctamente'
        })
    } catch (error) {
        console.log(error);   
    }
});

//eliminar un contrato
router.delete('/delete_contracts/:id_contract', async (req, res)=>{
    try {
        const id=req.params.id_contract;
        const contract = contractSchema.findById(id)
        await contract.deleteOne({_id:id})
        res.json({
            mensaje: 'contrato eliminado correctamente'
        })
    } catch (error) {
        console.log(error);  
    }
});

module.exports=router;
