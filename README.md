# Quick Start: Node.js and MariaDB

This repository will walk you through the process of quickly getting started with [Node.js](https://nodejs.org) and [MariaDB](https://github.com/mariadb-developers/mariadb-getting-started) using the [MariaDB Node.js connector](https://github.com/mariadb-corporation/mariadb-connector-nodejs).

## Requirements 

* [Node.js](https://nodejs.org/en/download/)
* [MariaDB](https://mariadb.com) - to get started with MariaDB check out [this guide](https://github.com/mariadb-developers/mariadb-getting-started)!

## Samples

* [Get connected to a MariaDB database](connect/connection.js)
* Execute querying operations: 
    * [Create database and table](crud/create.js) 
    * [Insert records into a table](crud/insert.js)
    * [Read records from a table](crud/read.js)
    * [Update a record in a table](crud/update.js)
    * [Delete a record from a table](crud/delete.js)
    * [Drop a database](crud/drop.js)

## Get Started with Node.js and MariaDB

First, clone this repo.

```bash
$ git clone https://github.com/mariadb-developers/nodejs-quickstart.git
```

Next, install the MariaDB Node.js driver (connector) using [npm](npmjs.com).


```bash
$ npm install mariadb
```

Finally, to execute the sample JavaScript files.

```bash 
$ node connect/connection.js
$ node crud/create.js

...
```

**Note:** Be sure to update the connection configuration to point to _your_ database in the JavaScript sample files. For example, [here](connect/connection.js#L7-L11).

## Helpful Resources

* [Official MariaDB Documentation](https://mariadb.com/docs)
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
