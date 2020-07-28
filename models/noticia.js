import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const notiSchema = new Schema({
    f_crea: {type: Date, default: Date.now},
    titulo: String,
    autor_id: String,
    articulo: String,
    foto: String,
    activo: {type: Boolean, default: true}
});

// Convertir a modelo
const Noticia = mongoose.model('Noticia', notiSchema);

export default Noticia;