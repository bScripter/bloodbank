const pool = require("../../config/database")

module.exports ={
    getBloodQuantity: callback =>{
        pool.query(
            `select blood_type, sum(blood_quantity) as blood_quantity from bloodInventory group by blood_type;`,
            [],
            (error,results,fields) => {
                if(error){
                    return callback(error)
                }
                return callback(null,results)
            }
        )
    },

    getBloodQuantityById: (id,callback) =>{
        pool.query(
            `select blood_type, blood_quantity from bloodInventory where bb_id=?;`,
            [id],
            (error,results,fields) => {
                if(error){
                    return callback(error)
                }
                return callback(null,results)
            }
        )
    },
}