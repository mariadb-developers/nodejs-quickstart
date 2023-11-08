const mariadb = require('mariadb');

async function asyncFunction() {
    let conn;
    try {
        // Create a new connection
        conn = await mariadb.createConnection({
            host: '127.0.0.1',
            port: '3306',
            user: 'user',
            password: 'Password123!',
        });

        // Print connection thread
        console.log(`Connected! (id=${conn.threadId})`);
    } catch (err) {
        // Print error
        console.log(err);
    } finally {
        // Close connection
        if (conn) await conn.close();
    }
}

asyncFunction();