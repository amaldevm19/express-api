
const db = require("../models/pool")
const messageTable = require('./queries')

const executeQueryArray = async arr => new Promise (resolve =>{
    const stop = arr.length;
    arr.forEach(async (q, index) => {
        try{
            console.log(q)
            await db.query(q);
        }catch(err){
            console.log(err)
        }
        if (index + 1 === stop) resolve();
    });
})

 const queryFunction =
 {  dropTables : () => {console.log("executed - Drop"); executeQueryArray([ messageTable.drop ])},
    createTables : () => { console.log("executed - Creation"); executeQueryArray([ messageTable.create ])},
    insertIntoTables : () =>{ console.log("executed - Insertion"); executeQueryArray([ messageTable.insert ])}
 }


module.exports = queryFunction;