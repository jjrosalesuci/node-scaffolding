const express = require('express');
/*
const reactEngine = require('react-engine');
const reactExpressView = require('react-engine/lib/expressView');
*/
const config = require('./config');
const apiRouter = require('./api');
const appRouter = require('./app');

const app = express();

// Configuraciones de express
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.use(express.static(config.static));

/*
const engine = reactEngine.server.create();
app.engine('.jsx', engine);

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jsx');

app.set('view', reactExpressView);
*/

// Asignar middlewares globales
// app.use(bodyParser);

app.use('/api', apiRouter);
app.use(appRouter);

app.listen(config.PORT, () => {
    console.log('Aplicación levantanda')
});