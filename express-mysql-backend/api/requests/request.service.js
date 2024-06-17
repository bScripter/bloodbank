const pool = require("../../config/database")

module.exports ={
    getRequests: callback =>{
        pool.query(
            `select req_id, requested_blood_type, request_quantity, hs_id from request;`,
            [],
            (error,results,fields) => {
                if(error){
                    return callback(error)
                }
                return callback(null,results)
            }
        )
    },
    
    getRequestsById: (id, callback) =>{
        pool.query(
            `select req_id, requested_blood_type, request_quantity, hs_id from request where bb_id=?;`,
            [id],
            (error,results,fields) => {
                if(error){
                    return callback(error)
                }
                return callback(null,results)
            }
        )
    },
    insertRequest:(data,callback) => {
        
        pool.query(
        `insert into request(req_id,patient_name,hs_id,requested_blood_type,request_quantity,bb_id,gender,requested_date) values(?,?,?,?,?,?,?,?,?)`,
        [
            data.req_id,
            data.patient_name,
            data.hs_id,
            data.requested_blood_type,
            data.request_quantity,
            data.bb_id,
            data.gender,
            data.requested_date
            
        ],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        })
        },

   
}