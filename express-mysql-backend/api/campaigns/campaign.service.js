const pool = require("../../config/database")


module.exports ={
    getCampaign: callback =>{
        pool.query(
            `select campaign_name, campaign_date, campaign_status from campaign ;`,
            [],
            (error,results,fields) => {
                if(error){
                    return callback(error)
                }
                return callback(null,results)
            }
        )
    },
    getCampaignById: (id,callback) =>{
    
        pool.query(
            `Select campaign_id, campaign_name, location,campaign_date, contact from campaign where bb_id=?`,
            [id],
            (error,results,fields) => {
                if(error){
                    return callback(error)
                }
                return callback(null,results)
            }
        )
    },
    insertCampaign: (data, callback) => {
        pool.query(
            `insert into campaign(campaign_id,campaign_name,bb_id,campaign_date,campaign_status,location,contact) values(?,?,?,?,?,?,?)`,
            [
                data.campaign_id,
                data.campaign_name,
                data.bb_id,
                data.campaign_date,
                data.campaign_status,
                data.location,
                data.contact

            ],
            (error,results,fields) => {
                if(error){
                    return callback(error)
                }
                return callback(null,results)
            }
        )
    }

   
}