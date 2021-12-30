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
        var result = await conn.query("UPDATE demo.contacts SET email = 'jbravo@mariadb.com' WHERE id = 1");
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