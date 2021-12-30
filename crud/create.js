const mariadb = require("mariadb");

async function main() {
    let conn;
    try {
        // Create a connection object using the MariaDB settings and credentials
        conn = await mariadb.createConnection({
            host: "<host_address>",
            user: "<username>",
            password: "<password>"
        });
        
        // Execute query to create a new database
        await conn.query("CREATE DATABASE demo");
        console.log("Demo database created.");

        // Execute query to create a new table
        await conn.query("CREATE TABLE demo.contacts ( \
                        id INT(11) unsigned NOT NULL AUTO_INCREMENT, \
                        first_name VARCHAR(50) NOT NULL, \
                        last_name VARCHAR(50) NOT NULL, \
                        email VARCHAR(75), \
                        PRIMARY KEY (id))");
        console.log("Contacts table created.");
    } catch (err) {
        // Print errors
        console.log(err);
    } finally {
        // Close the connection
        if (conn) conn.close();
    }
}

main();