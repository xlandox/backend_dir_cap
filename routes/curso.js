import express from 'express';
const router = express.Router();

import Curso from '../models/curso';

// Importamos los middlewares
const {verificarAuth, verificarAdmin} = require('../middlewares/autenticacion')

// Agregar un nuevo curso
router.post('/nuevo_curso', [verificarAuth, verificarAdmin], async(req, res) => {
    const body = req.body;
    body.autor_id = req.usuario._id;
    try {
        const cursoDB = await Curso.create(body);
        res.status(200).json(cursoDB); 
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Obtener un documento en especifico utilizando el id
router.get('/curso/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const cursoDB = await Curso.findOne({_id});
        res.json(cursoDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Obtener todos los documentos de la coleccion curso
router.get('/cursoss', async(req, res) => {
    try {
        const cursoDB = await Curso.find();
        // contar documentos
        const totalCursos = await Curso.find().countDocuments();
        res.json({cursoDB, totalCursos});
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Obtener todos los documentos de la coleccion curso con paginacion
router.get('/cursos', async(req, res) => {
    const limite = Number(req.query.limite) || 6;
    const skip = Number(req.query.skip) || 0;
    try {
        const cursoDB = await Curso.find().limit(limite).skip(skip);
        // contar documentos
        const totalCursos = await Curso.find().countDocuments();
        res.json({cursoDB, totalCursos});
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Actualizar una noticia
router.put('/curso/:id', [verificarAuth, verificarAdmin], async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const cursoDB = await Curso.findByIdAndUpdate(_id, body, {new: true});
        res.json(cursoDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Eliminar una noticia
router.delete('/curso/:id', [verificarAuth, verificarAdmin], async(req, res) => {
    const _id = req.params.id;
    try {
        const cursoDB = await Curso.findByIdAndDelete({_id});
        if(!cursoDB){
            return res.status(400).json({
                mensaje: 'No se encontro ese id', error
            })
        }
        res.json(cursoDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});



module.exports = router;