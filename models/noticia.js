import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const notiSchema = new Schema({
    f_crea: {type: Date, default: Date.now},
    titulo: {type: String, required: [true, 'Titulo de la noticia obligatorio']},
    autor_id: String,
    articulo: {type: String, required: [true, 'Articulo de la noticia obligatorio']},
    foto: {type: String, required: [true, 'Foto de la noticia obligatorio']},
    activo: {type: Boolean, default: true}
});

// Convertir a modelo
const Noticia = mongoose.model('Noticia', notiSchema);

export default Noticia;