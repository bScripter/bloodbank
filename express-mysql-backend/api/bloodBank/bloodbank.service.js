const pool = require("../../config/database")


module.exports ={
    //Adding a bloodbank to the database
    create:(data,callback) => {
    console.log(data)
    pool.query(
    `insert into bloodBank(bb_id,bb_name,bb_address,bb_contact,bb_email) values(?,?,?,?,?)`,
    [
        data.bb_id,
        data.bb_name,
        data.bb_address,
        data.bb_contact,
        data.bb_email
        
    ],
    (error, results, fields) => {
        if (error) {
            return callback(error);
        }
        return callback(null, results);
    })
    },
    //Deleting a bloodbank
    deleteBloodBank:(id,callback) => {
        pool.query(
            `delete from bloodBank where bb_id=?`,
            [id],
            (error,results, fields) =>{
                if(error){
                    return callback(error);
                }
                return callback(null,results)
            }
        )
    },
    //View All bloodbanks,
    getBloodBank: callback =>{
        pool.query(
            `Select * from BloodBank`,
            [],
            (error,results,fields) => {
                if(error){
                    return callback(error)
                }
                return callback(null,results)
            }
        )
    },
    //specific bloodbank
    getBloodBankById: (id,callback) =>{
    
        pool.query(
            `Select * from BloodBank where bb_id=?`,
            [id],
            (error,results,fields) => {
                if(error){
                    return callback(error)
                }
                return callback(null,results[0])
            }
        )
    },

    //Update Blood Bank

    updateBloodBank: (data,callback) => {
        pool.query(
            "update bloodBank set bb_id=?, bb_name=?, bb_address=?, bb_contact=?, bb_email=? where bb_id=?"
        ,
        [
        data.bb_id,
        data.bb_name,
        data.bb_address,
        data.bb_contact,
        data.bb_email,
        data.bb_id
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






