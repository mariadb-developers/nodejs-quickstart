const db = require("./db");

async function asyncFunction() {
    let conn;
    try {
        // Insert values
        const contacts = [
            ["Bob", "Hardy", "bob@mariadb.com"],
            ["Karen", "Smith", "karen@mariadb.com"],
            ["Katie", "Johnson", "katie@mariadb.com"]
        ];

        // Acquire a connection from the connection pool
        conn = await db.pool.getConnection();

        // Start a new transaction
        await conn.beginTransaction();

        // Insert query with parameter placeholders 
        const insertQuery = "INSERT INTO demo.contacts (first_name, last_name, email) VALUES (?, ?, ?)";

        // Insert new customer record using pool.query function
        const result = await conn.batch(insertQuery, contacts);

        // Commit the transaction
        await conn.commit();
        
        // Print result
        console.log(result);
    } catch (err) {
        // Print errors
        console.log(err);
        // Roll back the transaction
        conn.rollback();
    } finally {
        if (conn) await conn.release();
		db.pool.end();
    }
}

asyncFunction();