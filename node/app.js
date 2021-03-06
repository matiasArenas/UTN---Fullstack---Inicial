const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const session = require('express-session');
const {validateEmailContacto} = require('./middlewares/clientesValidate');
const {validateRegistro} = require('./middlewares/registroValidate');
const {verifyAdmin} = require('./middlewares/auth');

dotenv.config();
const indexRouter = require('./routes/index');
const registroUser = require('./routes/registro');
const login = require('./routes/login');
const contactoRouter = require('./routes/contacto');
const cocinaMesas = require('./routes/cocina-mesas');
const cocinaArrime = require('./routes/cocina-arrime');
const cocinaVitrinas = require('./routes/cocina-vitrinas');
const dormitorioMesas = require('./routes/dormitorio-mesas');
const dormitorioComodas = require('./routes/dormitorio-comodas');
const dormitorioRoperos = require('./routes/dormitorio-roperos');
const livingMesas = require('./routes/living-mesas');
const livingRecibidores = require('./routes/living-recibidores');
const livingSillones = require('./routes/living-sillones');
const oficinaBibliotecas = require('./routes/oficina-bibliotecas');
const oficinaEscritorios = require('./routes/oficina-escritorios');
const homeAdministrador = require('./routes/indexAdmin');
const altaProducto = require('./routes/altaProducto');
const modificaEliminaProductos = require('./routes/modificaEliminaProductos');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret : 'adminSession',
  cookie : {maxAge:null},
  resave : true,
  saveUninitialized : false
}))

// Rutas principales
app.use('/', indexRouter);
app.use('/contacto',validateEmailContacto,contactoRouter);
app.use('/login', login);
app.use('/registro',validateRegistro,registroUser);

//Rutas categor??as
app.use('/cocina-mesas',cocinaMesas);
app.use('/cocina-arrime',cocinaArrime);
app.use('/cocina-vitrinas',cocinaVitrinas);
app.use('/dormitorio-mesas',dormitorioMesas);
app.use('/dormitorio-comodas',dormitorioComodas);
app.use('/dormitorio-roperos',dormitorioRoperos);
app.use('/living-mesas',livingMesas);
app.use('/living-recibidores',livingRecibidores);
app.use('/living-sillones',livingSillones);
app.use('/oficina-bibliotecas',oficinaBibliotecas);
app.use('/oficina-escritorios', oficinaEscritorios);
app.use('/indexAdmin', verifyAdmin, homeAdministrador);
app.use('/altaProducto', verifyAdmin, altaProducto);
app.use('/modificaEliminaProductos', verifyAdmin, modificaEliminaProductos );

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
