import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    f_crea: {type: Date, default: Date.now},
    titulo: {type: String, required: [true, 'Titulo del blog obligatorio']},
    autor_id: String,
    articulo: {type: String, required: [true, 'Articulo del blog obligatorio']},
    foto: {type: String, required: [true, 'Foto del blog obligatorio']},
    activo: {type: Boolean, default: true}
});

// Convertir a modelo
const Blog = mongoose.model('Blog', blogSchema);

export default Blog;