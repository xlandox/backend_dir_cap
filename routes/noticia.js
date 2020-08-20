import express from 'express';
const router = express.Router();

// Importar el modelo noticia para ser utilizado
import Noticia from '../models/noticia';

// Importamos los middlewares
const {verificarAuth, verificarAdmin} = require('../middlewares/autenticacion')

// Agregar una nueva noticia
router.post('/nueva_noticia', [verificarAuth, verificarAdmin], async(req, res) => {
    const body = req.body;
    body.autor_id = req.usuario._id;
    try {
        const noticiaDB = await Noticia.create(body);
        res.status(200).json(noticiaDB); 
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Obtener un documento en especifico utilizando el id
router.get('/noticia/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const noticiaDB = await Noticia.findOne({_id});
        res.json(noticiaDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Obtener todos los documentos de la coleccion noticias
router.get('/noticias', async(req, res) => {
    try {
        const noticiaDB = await Noticia.find();
        res.json(noticiaDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Actualizar una noticia
router.put('/noticia/:id', [verificarAuth, verificarAdmin], async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const noticiaDB = await Noticia.findByIdAndUpdate(_id, body, {new: true});
        res.json(noticiaDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Eliminar una noticia
router.delete('/noticia/:id', [verificarAuth, verificarAdmin], async(req, res) => {
    const _id = req.params.id;
    try {
        const noticiaDB = await Noticia.findByIdAndDelete({_id});
        if(!noticiaDB){
            return res.status(400).json({
                mensaje: 'No se encontro ese id', error
            })
        }
        res.json(noticiaDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

//Exportacion del router
module.exports = router;