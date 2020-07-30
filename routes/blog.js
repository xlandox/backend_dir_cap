import express from 'express';
const router = express.Router();

// Importar el modelo usuario para ser utilizado
import Blog from '../models/blog';

// Importamos los middlewares
const {verificarAuth, verificarAdmin} = require('../middlewares/autenticacion')

// Agregar un nuevo blog
router.post('/nuevo_blog', [verificarAuth, verificarAdmin], async(req, res) => {
    const body = req.body; 
    body.autor_id = req.usuario._id; 
    try {
        const blogDB = await Blog.create(body);
        res.status(200).json(blogDB); 
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Obtener un documento en especifico utilizando el id
router.get('/blog/:id', [verificarAuth, verificarAdmin], async(req, res) => {
    const _id = req.params.id;
    try {
        const blogDB = await Blog.findOne({_id});
        res.json(blogDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Obtener todos los documentos de la coleccion blogs
router.get('/blogs', [verificarAuth, verificarAdmin], async(req, res) => {
    try {
        const blogDB = await Blog.find();
        res.json(blogDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Actualizar un blog
router.put('/blog/:id', [verificarAuth, verificarAdmin], async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const blogDB = await Blog.findByIdAndUpdate(_id, body, {new: true});
        res.json(blogDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

// Eliminar un blog
router.delete('/blog/:id', [verificarAuth, verificarAdmin], async(req, res) => {
    const _id = req.params.id;
    try {
        const blogDB = await Blog.findByIdAndDelete({_id});
        if(!blogDB){
            return res.status(400).json({
                mensaje: 'No se encontro Id', error
            })
        }
        res.json(blogDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error
        })
    }
});

//Exportacion del router
module.exports = router;