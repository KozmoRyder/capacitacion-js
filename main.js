var express = require('express');
var app = express();

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

// app.get('/insertar/:mensaje', (req, res) => {
//     res.render('main.html',{mensaje:req.params.mensaje});
// });




app.listen(3000, function () {
    console.log('Se inicia el proyecto')
});

