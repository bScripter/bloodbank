const pool = require("../../config/database")


module.exports ={
    //Adding a hospital
    create:(data,callback) => {
    console.log(data)
    pool.query(
    `insert into hospital(hs_id,hs_name,hs_address,hs_contact,hs_email) values(?,?,?,?,?)`,
    [
        data.hs_id,
        data.hs_name,
        data.hs_address,
        data.hs_contact,
        data.hs_email
        
    ],
    (error, results, fields) => {
        if (error) {
            return callback(error);
        }
        return callback(null, results);
    })
    },
    //Deleting a hospital
    deleteHospital:(id,callback) => {
        pool.query(
            `delete from hospital where hs_id=?`,
            [id],
            (error,results, fields) =>{
                if(error){
                    return callback(error);
                }
                return callback(null,results)
            }
        )
    },
    //View hospitals ,
    getHospital: callback =>{
        pool.query(
            `Select * from hospital`,
            [],
            (error,results,fields) => {
                if(error){
                    return callback(error)
                }
                return callback(null,results)
            }
        )
    },
    //Specific Hospital
    getHospitalById: (id,callback) =>{
    
        pool.query(
            `Select * from hospital where hs_id=?`,
            [id],
            (error,results,fields) => {
                if(error){
                    return callback(error)
                }
                return callback(null,results[0])
            }
        )
    },

    //Update hospital

    updateHospital: (data,callback) => {
        pool.query(
            "update hospital set hs_id=?, hs_name=?, hs_address=?, hs_contact=?, hs_email=? where hs_id=?"
        ,[
        data.hs_id,
        data.hs_name,
        data.hs_address,
        data.hs_contact,
        data.hs_email,
        data.hs_id
        ],
        (error,results,fields) => {
            if(error){
                console.log(error)
                return callback(error)
            }
            return callback(null,results)
        }
        )
    }

}






