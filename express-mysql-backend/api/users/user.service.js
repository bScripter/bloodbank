const pool = require("../../config/database")

module.exports ={
    getUser: callback =>{
        pool.query(
            `select username, password from user;`,
            [],
            (error,results,fields) => {
                if(error){
                    return callback(error)
                }
                return callback(null,results)
            }
        )
    },
}