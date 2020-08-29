import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cursoSchema = new Schema({
    nom: {type: String, required: [true, 'Nombre del curso obligatorio']},
    foto: {type: String, required: [true, 'Foto de la noticia obligatorio']},
    des: {type: String, required: [true, 'Descripcion del curso obligatoria']},
    autor_id: String,
    f_ini: {type: Date, required: [true, 'Fecha inicial del curso obligatoria']},
    f_fin: {type: Date, required: [true, 'Fecha final del curso obligatoria']},
    cupo: {type: Number, require: [true, 'Cupo del curso obligatorio']},
    f_crea: {type: Date, default: Date.now},
    activo: {type: Boolean, default: true}
});

// Convertir a modelo
const Curso = mongoose.model('Curso', cursoSchema);

export default Curso;