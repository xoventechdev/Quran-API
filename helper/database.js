const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'quanbyword'
})

connection.connect(function(err) {
    if(err) {
        console.log(err);
    }else {
        console.log('Connected to database');
    }
});


module.exports = connection;