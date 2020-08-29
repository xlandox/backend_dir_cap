import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

// Conexión base de datos
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/db_dir_cap';
const options = {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
};

// Usando promesas
mongoose.connect(uri, options).then(() => { console.log('Conectado a MongoDB') }, err => { console.log(err) });

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', require('./routes/usuario'));
app.use('/api', require('./routes/carrusel'));
app.use('/api', require('./routes/curso'));
app.use('/api', require('./routes/blog'));
app.use('/api', require('./routes/noticia'));
app.use('/api', require('./routes/login'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
    console.log('El servidor se esta escuchando en el puerto: '+ app.get('puerto'));
});