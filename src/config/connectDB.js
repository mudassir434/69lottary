const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'http://malikmysql.67d13c0402.onlitegix.com:35715',
    user: 'demo',
    password: 'k6hw733KbiLb43zM',
    database: 'demo'
});

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'admin',
//     password: 'Dph51mO5qkS8U1k',
//     database: '92lottery'
// });

export default connection;
