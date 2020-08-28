import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const uniqueValidator = require('mongoose-unique-validator');

// Roles permitidos
const roles = {
    values: ['Usuario', 'Administrador'],
    message: 'Rol no valido'
}

const usuSchema = new Schema({
    nom: {type: String, uppercase: true, required: [true, 'El nombre es obligatorio']},
    a_pat:{type: String, uppercase: true, required: [true, 'El apellido paterno es obligatorio']},
    a_mat: {type: String, uppercase: true, required: [true, 'El apellido materno es obligatorio']},
    f_nac: {type: Date, required: [true, 'La fecha de nacimiento es obligatoria']},
    alca: {type: String, required: [true, 'La alcaldia es obligatoria']},
    tel: {type: Number, required: [true, 'Un numero telefonico es obligatorio']},
    correo: {type: String, required: [true, 'El correo es obligatorio'], unique: true},
    contra: {type: String, required: [true, 'La contrasena es obligatoria']},
    rol: {type: String, default: 'Usuario', enum: roles},
    f_reg: {type: Date, default: Date.now},
    activo: {type: Boolean, default: true}
});

usuSchema.plugin(uniqueValidator, { message: 'La dirección de correo electrónico que ha ingresado ya está registrada.' });

usuSchema.methods.toJSON = function(){
    const obj = this.toObject();
    delete obj.contra;
    return obj;
}

// Convertir a modelo
const Usuario = mongoose.model('Usuario', usuSchema);

export default Usuario;