const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const registroUser = require('./routes/registro');
const quienesSomos = require('./routes/conocenos');
const contactoRouter = require('./routes/contacto');
const cocinaMesas = require('./routes/categoria/cocina/mesas');
const cocinaArrime = require('./routes/categoria/cocina/arrime');
const cocinaVitrinas = require('./routes/categoria/cocina/vitrinas');
const dormitorioMesas = require('./routes/categoria/dormitorio/mesas');
const dormitorioComodas = require('./routes/categoria/dormitorio/comodas');
const dormitorioRoperos = require('./routes/categoria/dormitorio/roperos');
const livingMesas = require('./routes/categoria/living/mesas');
const livingRecibidores = require('./routes/categoria/living/recibidores');
const livingSillones = require('./routes/categoria/living/sillones');
const oficinaBibliotecas = require('./routes/categoria/oficina/bibliotecas');
const oficinaEscritorios = require('./routes/categoria/oficina/escritorios');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas principales
app.use('/', indexRouter);
app.use('/contacto',contactoRouter);
app.use('/registro',registroUser);
app.use('/quienes-somos', quienesSomos);

//Rutas categorías
app.use('/categoria/cocina/mesas',cocinaMesas);
app.use('/categoria/cocina/arrime',cocinaArrime);
app.use('/categoria/cocina/vitrinas',cocinaVitrinas);
app.use('/categoria/dormitorio/mesas',dormitorioMesas);
app.use('/categoria/dormitorio/comodas',dormitorioComodas);
app.use('/categoria/dormitorio/roperos',dormitorioRoperos);
app.use('/categoria/living/mesas',livingMesas);
app.use('/categoria/living/recibidores',livingRecibidores);
app.use('/categoria/living/sillones',livingSillones);
app.use('/categoria/oficina/bibliotecas',oficinaBibliotecas);
app.use('/categoria/oficina/escritorios', oficinaEscritorios);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
