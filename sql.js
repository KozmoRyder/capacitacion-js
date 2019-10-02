var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MY_CONNECTION_HOST || '10.10.20.65',
    port: process.env.MY_CONNECTION_PORT || 4003,
    user: 'root',
    password: '1234'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});



// Usa minúsculas para los nombres de los objetos
//  Table gst.entidades
//      id int
//      nombre varchar
//      apellido varchar


/** Tarea
 * 
 * Pasar el codigo de abajo a una funciones que te permitan ejecutar queries de SELECT, INSERT, UPDATE y DELETE
 * Exportar las funciones para dejarlas disponibles en el main.js y pasar las operaciones realizadas
 * para guardar los datos ingresados en la variable a guardarlos en la base de datos MYSQL
 * 
 */

function execute_sql(query, callback){
    connection.query(query, function (error, results, fields) {
        if (error) throw error;
    
        // console.log(results);   
        callback(results) 
    });
}

module.exports = { execute_sql }