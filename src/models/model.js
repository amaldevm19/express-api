
const db = require('./db')

class Model{
    constructor(table){
        this.db = db;
        this.table = table;
        this.db.on('error',(err, client)=>{`Error, ${err}, on idle client${client}`})
    }
    async select(col,params){
        let query = `SELECT ${col} FROM ${this.table}`;
        if (params) query += params;
        return this.db.query(query);
    }
    async insertWithReturn(columns, values) {
        const query = `
            INSERT INTO ${this.table}(${columns})
            VALUES (${values})
            RETURNING id, ${columns}
            `;
        return this.db.query(query);
    }
}

module.exports = Model