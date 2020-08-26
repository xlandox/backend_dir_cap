import express from 'express';
const router = express.Router();

// Importar el modelo usuario para ser utilizado
import Carrusel from '../models/carrusel';

// Importamos los middlewares
const {verificarAuth, verificarAdmin} = require('../middlewares/autenticacion')

// Agregar una nueva imagen al carrusel
router.post('/nueva_imagen', [verificarAuth, verificarAdmin], async(req, res) => {
    const body = req.body; 
    body.autor_id = req.usuario._id; 
    try {
        const carruselDB = await Carrusel.create(body);
        res.status(200).json(carruselDB); 
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Obtener un documento en especifico utilizando el id
router.get('/imagen/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const carruselDB = await Carrusel.findOne({_id});
        res.json(carruselDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

/*// Obtener todos los documentos de la coleccion carrusel
router.get('/imagenes', async(req, res) => {
    try {
        const carruselDB = await Carrusel.find();
        res.json(carruselDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});*/

// Obtener todos los documentos de la coleccion carrusel con paginacion
router.get('/imagenes', async(req, res) => {
    const limite = Number(req.query.limite) || 5;
    const skip = Number(req.query.skip) || 0;
    try {
        const carruselDB = await Carrusel.find().limit(limite).skip(skip);
        // contar documentos
        const totalImagenes = await Carrusel.find().countDocuments();
        res.json({carruselDB, totalImagenes});
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Actualizar una imagen
router.put('/imagen/:id', [verificarAuth, verificarAdmin], async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const carruselDB = await Carrusel.findByIdAndUpdate(_id, body, {new: true});
        res.json(carruselDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Eliminar una imagen
router.delete('/imagen/:id', [verificarAuth, verificarAdmin], async(req, res) => {
    const _id = req.params.id;
    try {
        const carruselDB = await Carrusel.findByIdAndDelete({_id});
        if(!carruselDB){
            return res.status(400).json({
                mensaje: 'No se encontro Id', error
            })
        }
        res.json(carruselDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

//Exportacion del router
module.exports = router;