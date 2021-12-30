# Quick Start: Node.js and MariaDB

This repository will walk you through the process of quickly getting started with [Node.js](https://nodejs.org) and [MariaDB](https://mariadb.com) using the [MariaDB Node.js connector](https://github.com/mariadb-corporation/mariadb-connector-nodejs).

## Requirements 

* [Node.js](https://nodejs.org/en/download/)
* [MariaDB](https://mariadb.com)

## Samples

* [Get connected to a MariaDB database](connect/connection.js)
* Execute querying operations: 
    * [Create database and table](crud/create.js) 
    * [Insert records into a table](crud/insert.js)
    * [Read records from a table](crud/read.js)
    * [Update a record in a table](crud/update.js)
    * [Delete a record from a table](crud/delete.js)
    * [Drop a database](crud/drop.js)

## Get Started

First, clone this repo.

```bash
$ git clone https://github.com/mariadb-developers/nodejs-quickstart.git
```

Next, install the MariaDB Node.js driver (connector) using [npm](npmjs.com).


```bash
$ pip install mariadb
```

Finally, to execute the sample JavaScript files.

```bash 
$ node connect/connection.js
$ node crud/create.js

...
```

## Support and Contribution

Please feel free to submit PR's, issues or requests to this project project directly.

If you have any other questions, comments, or looking for more information on MariaDB please check out:

* [MariaDB Developer Hub](https://mariadb.com/developers)
* [MariaDB Community Slack](https://r.mariadb.com/join-community-slack)

Or reach out to us diretly via:

* [developers@mariadb.com](mailto:developers@mariadb.com)
* [MariaDB Twitter](https://twitter.com/mariadb)

## License <a name="license"></a>
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=plastic)](https://opensource.org/licenses/MIT)