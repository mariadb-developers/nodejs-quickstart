const mariadb = require('mariadb');

async function asyncFunction() {
    let conn;
    try {
        // Create a new connection
        conn = await mariadb.createConnection({
            host: '<insert_host_address_here>',
            port: '<insert_port_number_here>',
            user: '<insert_user_here>',
            password: '<insert_password_here>',
        });

        // Print connection thread
        console.log(`Connected! (id=${conn.threadId})`);
    } catch (err) {
        // Print error
        console.log(err);
    } finally {
        // Close connection
        if (conn) await conn.close();
    }
}

asyncFunction();