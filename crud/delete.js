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

        // Update contact data
        var result = await conn.query("DELETE FROM demo.contacts WHERE id = 1");
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