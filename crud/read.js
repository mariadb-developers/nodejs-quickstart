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

        // Use Connection to get customer data
        var rows = await conn.query("SELECT * FROM contacts");

        //Print list of contacts
        for (i = 0, len = rows.length; i < len; i++) {
            console.log(`(id=${rows[i].id}) ${rows[i].first_name} ${rows[i].last_name} <${rows[i].email}>`);
        }
    } catch (err) {
        // Print errors
        console.log(err);
    } finally {
        // Close the connection
        if (conn) conn.close();
    }
}

main();