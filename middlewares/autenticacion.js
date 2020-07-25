const jwt = require('jsonwebtoken');

const verificarAuth = (req, res, next) => {
    const token = req.get('token');
    jwt.verify(token, 'secret', (err, decoded) => {
        if(err){
            return res.status(400).json({
                mensaje: 'Usuario no valido'
            })
        }
        next();
    })
}

module.exports = {verificarAuth}