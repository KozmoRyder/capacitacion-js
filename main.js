var express = require('express');
var app = express();
const fs = require('fs');
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.engine('html',require('ejs').renderFile);
app.set('view engine','html');

app.get('/', (req, res) => {
    res.render('main.html',{mensaje:'Que se desea hacer?'});
});

app.get('/insertar', (req, res) => {
    res.render('insertar.html');
});

app.get('/datos', (req, res) => {
    res.render('datos.html');
});

// {
//     id: 1,
//     nombre: "asd",
//     apellido: "asda"
// }
let datos_table = [];
app.post('/recibirDatos', (req, res) => {
    let data = req.body;
    datos_table.push(data);
    console.log(data);

    res.send(true);
});

app.post('/enviarDatos', (req, res) => {
    res.send(datos_table);
});


// app.get('/insertar/:mensaje', (req, res) => {
//     res.render('main.html',{mensaje:req.params.mensaje});
// });

      

app.listen(3000, function () {
    console.log('Se inicia el proyecto')
});

