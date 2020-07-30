import express from 'express';
const router = express.Router();

const jwt = require('jsonwebtoken');

// Importar el modelo usuario para ser utilizado
import Usuario from '../models/usuario';

const bcrypt = require('bcrypt');
const saltRounds = 10;

// Peticion de inicio de sesion al servidor
router.post('/login', async(req, res) => {
    const body = req.body;
    try {
        //Se evalua el correo
        const usuarioDB = await Usuario.findOne({correo: body.correo})
        if(!usuarioDB){
            return res.status(400).json({
                mensaje: 'Correo o contrasena incorrectos'
            })
        }
        //Se evalua la contrasena
        if(!bcrypt.compareSync(body.contra, usuarioDB.contra)){
            return res.status(400).json({
                mensaje: 'Correo o contrasena incorrectos'
            })
        }
        //Se genera token
        const token = jwt.sign({ data: usuarioDB }, 'secret', { expiresIn: 60 * 60 * 24 * 30 });
        res.json({
            usuarioDB,
            token
        })
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

module.exports = router;