const db = require("./db");

async function asyncFunction() {
    let conn;
    try { 
        // Acquire a connection from the connection pool
        conn = await db.pool.getConnection();

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
        // Print error
        console.log(err);
    } finally {
        // Release the connection back into the connection pool
        if (conn) await conn.release();
    }
}

asyncFunction();