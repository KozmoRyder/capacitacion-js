var express = require('express');
var app = express();
const fs = require('fs');
var bodyParser = require('body-parser');


// app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.engine('html',require('ejs').renderFile);
app.set('view engine','html');

app.get('/', (req, res) => {
    res.render('pages/main',{mensaje:'Que se desea hacer?'});
});

app.get('/insertar', (req, res) => {
    res.render('pages/insertar');
});

app.get('/datos', (req, res) => {
    res.render('pages/datos');
});

app.post('/recibirDatos', (req, res) => {
    let data = req.body;

    console.log(data);

    res.send(true);
});



// app.get('/insertar/:mensaje', (req, res) => {
//     res.render('main.html',{mensaje:req.params.mensaje});
// });

      




app.listen(3000, function () {
    console.log('Se inicia el proyecto')
});

