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
        // Print the MariaDB server version 
        console.log(conn.serverVersion());
    } catch (err) {
        // Print errors
        console.log(err);
    } finally {
        // Close the connection
        if (conn) conn.close();
    }
}

main();