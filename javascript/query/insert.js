const db = require("./db");

async function asyncFunction() {
    try {
        // Insert values
        const first_name = "Johnny";
        const last_name = "Bravo";
        const email = "jbravo@mariadb.com"

        // Insert query with parameter placeholders 
        const insertQuery = "INSERT INTO demo.contacts (first_name, last_name, email) VALUES (?, ?, ?)";

        // Insert new customer record using pool.query function
        const result = await db.pool.query(insertQuery, [first_name, last_name, email]);
        
        // Print results
        console.log(`Contact (id=${result.insertId}) inserted.`);
    } catch (err) {
        // Print errors
        console.log(err);
    } 
}

asyncFunction();