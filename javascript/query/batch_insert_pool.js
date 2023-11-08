const db = require("./db");

async function asyncFunction() {
    try {
        // Insert values
        const contacts = [
            ["Jane", "Brown", "jane@mariadb.com"],
            ["Ryan", "Hall", "ryan@mariadb.com"],
            ["Susan", "Grady", "susan@mariadb.com"]
        ];

        // Insert query with parameter placeholders 
        const insertQuery = "INSERT INTO demo.contacts (first_name, last_name, email) VALUES (?, ?, ?)";

        // Insert new customer record using pool.query function
        const result = await db.pool.batch(insertQuery, contacts);
        
        // Print result
        console.log(result);
    } catch (err) {
        // Print errors
        console.log(err);
    } finally {
		db.pool.end();
	}
}

asyncFunction();