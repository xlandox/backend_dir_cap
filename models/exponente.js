import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const expSchema = new Schema({
    nom: String,
    a_pat: String,
    a_mat: String,
    f_nac: Date,
    alca: String,
    tel: Number,
    correo: String,
    contra: String,
    rol: {type: String, default: 'Exponente'},
    f_reg: {type: Date, default: Date.now},
    activo: {type: Boolean, default: true}
});

// Convertir a modelo
const Exponente = mongoose.model('Exponente', expSchema);

export default Exponente;