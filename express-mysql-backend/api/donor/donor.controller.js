const { create,deleteDonor,getDonors} = require("./donor.service")

module.exports = {
    createDonor:(req,res) => {
    const body = req.body;
    create(body, (err,results) => {
            if (err){ 
                console.log(err)
                return res.json({
                    success:0,
                    message:"Donor cannot be added"
                })
            }
        return res.json({
                success:1,
                message:"Donor added successfully"
            })
        })
    },
    deleteDonor:(req,res) => {
        const body = req.body;
        deleteDonor(body, (err,results) => {
            if(err){
                console.log(err);
                return res.json({
                    success:0,
                    message:"Donor cannot be deleted"
                })
            }
            if(results.affectedRows == 0){
                return res.json({
                    success:0,
                    message:"Donor not found"
                })
            }
            return res.json({
                success:1,
                message:"Donor deleted successfully"
            })
        })
    },
    getDonors:(req,res) => {
        getDonors((err,results) => {
            if(err){
                console.log(err);
                return
            }
            return res.json({
                success:1,
                message:results
            })
        })
    }

}