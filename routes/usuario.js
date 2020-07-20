import express from 'express';
const router = express.Router();

// Importar el modelo usuario para ser utilizado
import Usuario from '../models/usuario';

const bcrypt = require('bcrypt');
const saltRounds = 10;

// Agregar un nuevo usuario
router.post('/nuevo_usuario', async(req, res) => {
    const body = {
        nom: req.body.nom,
        a_pat: req.body.a_pat,
        a_mat: req.body.a_mat,
        f_nac: req.body.f_nac,
        alca: req.body.alca,
        tel: req.body.tel,
        correo: req.body.correo
    }  
    body.contra = bcrypt.hashSync(req.body.contra, saltRounds);
    try {
        const usuarioDB = await Usuario.create(body);
        res.status(200).json(usuarioDB); 
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Obtener un documento en especifico utilizando el id
router.get('/usuario/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const usuarioDB = await Usuario.findOne({_id});
        res.json(usuarioDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Obtener todos los documentos de la coleccion usuarios
router.get('/usuarios', async(req, res) => {
    try {
        const usuarioDB = await Usuario.find();
        res.json(usuarioDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Eliminar un usuario
router.delete('/usuario/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const usuarioDB = await Usuario.findByIdAndDelete({_id});
        if(!usuarioDB){
            return res.status(400).json({
                mensaje: 'No se encontro ese id', error
            })
        }
        res.json(usuarioDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Actualizar un usuario
router.put('/usuario/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const usuarioDB = await Usuario.findByIdAndUpdate(_id, body, {new: true});
        res.json(usuarioDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

//Exportacion del router
module.exports = router;