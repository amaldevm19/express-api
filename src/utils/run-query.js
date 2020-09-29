var queryFunction = require('./query-function');

(async () => {
    await queryFunction.createTables();
    await queryFunction.insertIntoTables();
  })();