import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const uniqueValidator = require('mongoose-unique-validator');

const usuSchema = new Schema({
    nom: String,
    a_pat: String,
    a_mat: String,
    f_nac: Date,
    alca: String,
    tel: Number,
    correo: {type: String, unique: true},
    contra: String,
    rol: {type: String, default: 'Usuario'},
    f_reg: {type: Date, default: Date.now},
    activo: {type: Boolean, default: true}
});

usuSchema.plugin(uniqueValidator, { message: 'Error, el {PATH} ya existe.' });

usuSchema.methods.toJSON = function(){
    const obj = this.toObject();
    delete obj.contra;
    return obj;
}

// Convertir a modelo
const Usuario = mongoose.model('Usuario', usuSchema);

export default Usuario;