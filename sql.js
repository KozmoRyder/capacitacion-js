const mysql = require('mysql');

/**
 * TODO(developer): specify SQL connection details
 */
const connectionName =
    process.env.INSTANCE_CONNECTION_NAME || 'my-nodejs-server-248322:southamerica-east1:srvmysql-des';
const dbUser = process.env.SQL_USER || 'mbravo';
const dbPassword = process.env.SQL_PASSWORD || 'capacitacion';
const dbName = process.env.SQL_NAME || 'webcapdb';

const mysqlConfig = {
    connectionLimit: 1,
    user: dbUser,
    password: dbPassword,
    database: dbName,
};
if (process.env.NODE_ENV === 'production') {
    mysqlConfig.socketPath = `/cloudsql/${connectionName}`;
}

// Connection pools reuse connections between invocations,
// and handle dropped or expired connections automatically.
let mysqlPool;

function consult(query, callback) {
    if (!mysqlPool) {
        mysqlPool = mysql.createPool(mysqlConfig);
    }

    mysqlPool.query(query, (err, results) => {
        if (err) {
            console.error(err);
        } else {
            console.log(JSON.stringify(results));
            callback(results);
        }
    });
}

module.export = {
    consult
}
// consult();