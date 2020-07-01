import express from 'express';
const router = express.Router();

// Importar el modelo usuario para ser utilizado
import Exponente from '../models/exponente';

// Agregar un nuevo usuario
router.post('/nuevo_exponente', async(req, res) => {
    const body = req.body;  
    try {
        const exponenteDB = await Exponente.create(body);
        res.status(200).json(exponenteDB); 
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Obtener un documento en especifico utilizando el id
router.get('/exponente/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const exponenteDB = await Exponente.findOne({_id});
        res.json(exponenteDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Obtener todos los documentos de la coleccion usuarios
router.get('/exponentes', async(req, res) => {
    try {
        const exponenteDB = await Exponente.find();
        res.json(exponenteDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Eliminar un usuario
router.delete('/exponente/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const exponenteDB = await Exponente.findByIdAndDelete({_id});
        if(!exponenteDB){
            return res.status(400).json({
                mensaje: 'No se encontro ese id', error
            })
        }
        res.json(exponenteDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Actualizar un usuario
router.put('/exponente/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const exponenteDB = await Exponente.findByIdAndUpdate(_id, body, {new: true});
        res.json(exponenteDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

//Exportacion del router
module.exports = router;