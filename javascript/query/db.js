const mariadb = require('mariadb');

// Expose the Pool object within this module
module.exports = Object.freeze({
  pool: mariadb.createPool({
    host: '<insert_host_address_here>',
    port: '<insert_port_number_here>',
    user: '<insert_user_here>',
    password: '<insert_password_here>'
  })
});
