const pool = require("../../config/database")


module.exports ={
    //Adding a Donor to the database
    create:(data,callback) => {
    pool.query(
    `insert into donor(donor_id,donor_name,donor_blood_type,campaign_id,quantity,last_donated,contact_detail,address,gender,age)
    values(?,?,?,?,?,?,?,?,?,?)`,
    [
        data.donor_id,
        data.donor_name,
        data.donor_blood_type,
        data.campaign_id,
        data.quantity,
        data.last_donated,
        data.contact_detail,
        data.address,
        data.gender,
        data.age
    ],
    (error, results, fields) => {
        if (error) {
            console.log(error);
        }
        return callback(null, results);
    })
    },
    //Deleting a donor
    deleteDonor:(data,callback) => {
        pool.query(
            `delete from donor where donor_id=?`,
            [data.donor_id],
            (error,results, fields) =>{
                if(error){
                    return callback(error);
                }
                return callback(null,results)
            }
        )
    },
    //View All donors,
    getDonors: callback =>{
        pool.query(
            `Select * from donor`,
            [],
            (error,results,fields) => {
                if(error){
                    return callback(error)
                }
                return callback(null,results)
            }
        )
    }

}






