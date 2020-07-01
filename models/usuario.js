import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usuSchema = new Schema({
    nom: String,
    a_pat: String,
    a_mat: String,
    genero: String,
    f_nac:  Date,
    alca: String,
    col: String,
    calle: String,
    tel: Number,
    esc: String,
    ocup: String,
    correo: String,
    contra: String,
    f_reg: {type: Date, default: Date.now},
    rol: {type: String, default: 'Usuario'},
    activo: {type: Boolean, default: true}
});

// Convertir a modelo
const Usuario = mongoose.model('Usuario', usuSchema);

export default Usuario;