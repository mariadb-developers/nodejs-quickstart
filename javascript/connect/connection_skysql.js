const mariadb = require('mariadb');

// Access the Node File System package
const fs = require("fs");

async function asyncFunction() {
    let conn;
    try {
        // Retrieve the Certificate Authority chain file
        const serverCert = [fs.readFileSync("path/to/skysql_chain.pem", "utf8")];

        // Create a new connection
        conn = await mariadb.createConnection({
            host: '<insert_host_address_here>',
            port: '<insert_port_number_here>',
            user: '<insert_user_here>',
            password: '<insert_password_here>',
            // Add an "ssl" property to the connection pool configuration, using the serverCert const defined above
            ssl: {
                ca: serverCert
            }
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