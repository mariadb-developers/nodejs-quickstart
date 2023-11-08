const db = require("./db");

async function asyncFunction() {
    let conn;
    try {    
        // Acquire a connection from the connection pool
        conn = await db.pool.getConnection();

        // Execute query to drop database
        await db.pool.query("DROP DATABASE demo");

        console.log("Demo database dropped.");
    } catch (err) {
        // Print error
        console.log(err);
    } finally {
        // Release the connection back into the connection pool
        if (conn) await conn.release();
		db.pool.end();
    }
}

asyncFunction();