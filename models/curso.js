import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cursoSchema = new Schema({
    nom: String,
    des: String,
    autor_id: String,
    exp_id: {type: Array, default: []},
    f_ini: Date,
    f_fin: Date,
    cupo: Number,
    usu_id: {type: Array, default: []},
    f_crea: {type: Date, default: Date.now},
    activo: {type: Boolean, default: true}
});

// Convertir a modelo
const Curso = mongoose.model('Curso', cursoSchema);

export default Curso;