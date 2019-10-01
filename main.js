var express = require('express');
var app = express();
const fs = require('fs');
var bodyParser = require('body-parser');
const { execute_sql } = require('./sql');


// app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.engine('html',require('ejs').renderFile);
app.set('view engine','html');


/**
 * FUNCIONES COMPLEMENTO
 */
function insertarDatos({id, nombre, apellido}, callback){
    let query = `INSERT INTO gst.entidades VALUES(${id}, '${nombre}', '${apellido}');`;
    execute_sql(query, callback);
}


/**
 * REDIRECCIONAMIENTOS
 */

app.get('/', (req, res) => {
    res.render('pages/main', {mensaje:'Que se desea hacer?'});
});

app.get('/insertar', (req, res) => {
    res.render('pages/insertar');
});

app.get('/datos', (req, res) => {
    res.render('pages/datos');
});

app.post('/recibirDatos', (req, res) => {
    let data = req.body;
    insertarDatos(data, () => { res.send(true); });
});

app.post('/enviarDatos', (req, res) => {
    execute_sql('SELECT * FROM gst.entidades;', (data) => { res.send(data); });
});

app.post('/borrarDatos', (req, res) => {
    execute_sql('TRUNCATE TABLE gst.entidades;', () => { res.send(true); });
});

const server = app.listen(process.env.PORT || 8080, () => {

    const address = server.address().address;
    const port = server.address().port;
    console.log(`App listening on http://${address}:${port}`);
})
