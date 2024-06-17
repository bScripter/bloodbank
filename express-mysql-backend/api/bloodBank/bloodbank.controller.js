const { create, deleteBloodBank, updateBloodBank, getBloodBank, getBloodBankById } = require("./bloodbank.service")

module.exports = {
    createBloodBank:(req,res) => {
    const body = req.body;
    create(body, (err,results) => {
            if (err){ 
                return res.json({
                    success:0,
                    message:err,
                })
            }
        return res.json({
                success:1,
                message:"Blood Bank added successfully"
            })
        })
    },
    getBloodBankById:(req,res) => {
        const id = req.params.id
        getBloodBankById(id, (err,results) => {
            if(err){
                console.log(err);
                return res.json({
                    success:0,
                    message:err
                })
            if(!results){
                return res.json({
                    success:0,
                    message: "Record Not Found"
            })
            }
            }
            return res.json({
                success:1,
                message:results
            }) 
        })

    },

    updateBloodBank:(req,res) =>{
        const body = req.body
        updateBloodBank(body, (err,results) => {
            if (err){ 
                console.log(err)

                return res.json({
                    success:0,
                    message:"BloodBank cannot be updated"
                })
            }
        return res.json({
                success:1,
                message:results
            })

        })

    },
    deleteBloodBank:(req,res) => {
        const id = req.params.id;
        deleteBloodBank(id, (err,results) => {
            if(err){
                console.log(err);
                return res.json({
                    success:0,
                    id:id,
                    message:"Blood Bank cannot be deleted"
                })
            }
            if(results.affectedRows == 0){
                return res.json({
                    success:0,
                    id:id ,
                    message:"Blood Bank not found"
                })
            }
            return res.json({
                success:1,
                message:"Blood Bank deleted successfully"
            })
        })
    },
    getBloodBank:(req,res) => {
        getBloodBank((err,results) => {
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