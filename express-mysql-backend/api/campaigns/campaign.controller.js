const {getCampaign, getCampaignById,insertCampaign} = require("./campaign.service")

module.exports = {
    getCampaign:(req,res) => {
        getCampaign((err,results) => {
            if(err){
                return res.json({error: err})
            }
            return res.json({
                success:1,
                message:results
            })
        })
    },

    getCampaignById:(req,res) => {
        const id = req.params.id
        getCampaignById(id, (err,results) => {
            if(err){
                console.log(err);
                return res.json({
                    success:0,
                    message:err
                })
            }
            
            if(!results){
                return res.json({
                    success:0,
                    message: "Record Not Found"
            })
            }
            return res.json({
                success:1,
                message:results
            }) 
        })

    },
    insertCampaign:(req,res) => {
        const body = req.body;
        insertCampaign(body, (err,results) => {
                if (err){ 
                    console.log(err)
                    return res.json({
                        success:0,
                        message:"campaign cannot be added"
                    })
                }
            return res.json({
                    success:1,
                    message:"campaign added successfully"
                })
            })
        }
    
}