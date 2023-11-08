const mariadb = require('mariadb');

// Expose the Pool object within this module
module.exports = Object.freeze({
    pool: mariadb.createPool({
        host: '127.0.0.1',
        port: '3306',
        user: 'user',
        password: 'Password123!'
    })
});
