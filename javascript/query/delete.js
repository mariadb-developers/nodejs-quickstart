const db = require("./db");

async function asyncFunction() {
    let conn;
    try {
        // Acquire a connection from the connection pool
        conn = await db.pool.getConnection();

        // Parameter value
        const contact_id = 1;

        // Update contact data
        var result = await conn.query("DELETE FROM demo.contacts WHERE id = ?", [contact_id]);

        // Print result
        console.log(result);
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