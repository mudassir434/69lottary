const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'http://malikmysql.67d13c0402.onlitegix.com:35715',
    user: 'grabdeal_97',
    password: 'grabdeal_97',
    database: 'grabdeal_97'
});

// const connection = mysql.createPool({
//     host: 'http://malikmysql.67d13c0402.onlitegix.com:35715',
//     user: 'grabdeal_97',
//     password: 'grabdeal_97',
//     database: 'grabdeal_97'
// });

export default connection;
