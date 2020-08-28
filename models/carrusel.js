import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const carruselSchema = new Schema({
    f_crea: {type: Date, default: Date.now},
    titulo: {type: String, required: [true, 'Titulo del la imagen obligatorio']},
    resumen: {type: String, required: [true, 'Resumen del la imagen obligatorio']},
    autor_id: String,
    foto: {type: String, required: [true, 'URL de la imagen del carrusel obligatoria']},
    activo: {type: Boolean, default: true}
});

// Convertir a modelo
const Carrusel = mongoose.model('Carrusel', carruselSchema);

export default Carrusel;