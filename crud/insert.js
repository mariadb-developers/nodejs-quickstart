const mariadb = require("mariadb");

async function main() {
    let conn;
    try {
        // Create a connection object using the MariaDB settings and credentials
        conn = await mariadb.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "RootPassword123!"
        });
        
        // Insert new customer records
        let result = await conn.query("INSERT INTO demo.contacts (first_name, last_name, email) \
                                        VALUES ('Johnny', 'Bravo', 'johnny@mariadb.com')");
        console.log(`Contact (id=${result.insertId}) inserted.`);
    } catch (err) {
        // Print errors
        console.log(err);
    } finally {
        // Close the connection
        if (conn) conn.close();
    }
}

main();