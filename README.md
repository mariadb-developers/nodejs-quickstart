# Quick Start: Node.js and MariaDB

This repository will walk you through the process of quickly getting started with [Node.js](https://nodejs.org) and [MariaDB](https://github.com/mariadb-developers/mariadb-getting-started) using the [MariaDB Node.js connector](https://github.com/mariadb-corporation/mariadb-connector-nodejs).

## Requirements 

* [Node.js](https://nodejs.org/en/download/)
* [MariaDB](https://mariadb.com) - to get started with MariaDB check out [this guide](https://github.com/mariadb-developers/mariadb-getting-started)!

## Samples

### JavaScript

The [javascript](javascript) folder provides simple examples using MariaDB Connector/Node.js with JavaScript.

* [Connecting to MariaDB](javascript/connect)
    * [connection.js](javascript/connect/connection.js) - a simple example of connecting to a MariaDB database instance.
    * [connection_skysql.js](javascript/connect/connection_skysql.js) - a simple example of how to connect to [MariaDB SkySQL](https://mariadb/com/skyview)

* [Execute querying operations](javascript/query)

    Examples that utilize a shared [database module](javascript/query/db.js) to perform various SQL operations.

    * [Create a database and table](javascript/query/create.js) - **required** before executing any other script
    * [Drop a database](javascript/query/drop.js)
    * [Insert records into a table](javascript/query/insert.js)
    * [Read records from a table](javascript/query/read.js)
    * [Update a record in a table](javascript/query/update.js)
    * [Delete a record from a table](javascript/query/delete.js)
    * [Bulk insert](javascript/query/batch_insert.js) - uses the Connection object Batch function
    * [Bulk insert](javascript/query/batch_insert.js) -  uses the Connection Pool object Batch function
    

### TypeScript

> ⚠️ Coming soon!

## Get Started with the Sample Scripts

First, clone this repo.

```bash
$ git clone https://github.com/mariadb-developers/nodejs-quickstart.git
```

Next, from within the `nodejs-quickstart` directory (that you just pulled down), install the MariaDB Node.js driver (connector) using [npm](npmjs.com).


```bash
$ npm install mariadb
```

Finally, to execute the sample JavaScript files using the `node` [CLI command](https://nodejs.org/api/cli.html).

**Note:** Be sure to update the connection configuration to point to _your_ database in the JavaScript sample files. For example, [here](javascript/connect/connection.js#L7-L12).

```bash 
$ node javascript/connect/connection.js

$ node javascript/query/create.js

$ node javascript/query/insert.js

$ node javascript/query/select.js

...
```

## Helpful Resources

* [Official MariaDB Documentation](https://mariadb.com/docs)
* [MariaDB Connector/Node.js Source Code](https://github.com/mariadb-corporation/mariadb-connector-nodejs)
* [MariaDB Quickstart Guide](https://github.com/mariadb-developers/mariadb-getting-started)

## Support and Contribution

Please feel free to submit PR's, issues or requests to this project directly.

If you have any other questions, comments, or looking for more information on MariaDB please check out:

* [MariaDB Developer Hub](https://mariadb.com/developers)
* [MariaDB Community Slack](https://r.mariadb.com/join-community-slack)

Or reach out to us directly via:

* [developers@mariadb.com](mailto:developers@mariadb.com)
* [MariaDB Twitter](https://twitter.com/mariadb)

## License <a name="license"></a>
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=plastic)](https://opensource.org/licenses/MIT)
