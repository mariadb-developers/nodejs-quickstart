const mariadb = require("mariadb");

async function main() {
    let conn;
    try {
        // Create a connection object using the MariaDB settings and credentials
        conn = await mariadb.createConnection({
            host: "<host_address>",
            user: "<username>",
            password: "<password>",
            database: "demo"
        });
        
        // Insert new customer records
        let result = await conn.query("INSERT INTO contacts (first_name, last_name, email) \
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