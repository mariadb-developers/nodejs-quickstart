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

        // Update contact data
        var result = await conn.query("DELETE FROM contacts WHERE id = 1");
        console.log(result);
    } catch (err) {
        // Print errors
        console.log(err);
    } finally {
        // Close the connection
        if (conn) conn.close();
    }
}

main();