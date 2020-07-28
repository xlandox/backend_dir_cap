import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const {verificarAuth, verificarAdmin} = require('../middlewares/autenticacion');

const blogSchema = new Schema({
    f_crea: {type: Date, default: Date.now},
    titulo: String,
    autor_id: String,
    articulo: String,
    foto: String,
    activo: {type: Boolean, default: true}
});

// Convertir a modelo
const Blog = mongoose.model('Blog', blogSchema);

export default Blog;