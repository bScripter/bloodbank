
const {getBloodQuantity, getBloodQuantityById} = require("./bloodInventory.service")

module.exports ={
    getBloodQuantity:(req,res) => {
        getBloodQuantity((err,results) => {
            if(err){
                return res.json({error: err})
            }
            return res.json({
                success:1,
                message:results
            })
        })
    },
    getBloodQuantityById:(req,res) => {
        const id = req.params.id
        getBloodQuantityById(id, (err,results) => {
            if(err){
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
}