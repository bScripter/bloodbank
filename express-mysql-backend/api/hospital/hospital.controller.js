const { create, getHospital, getHospitalById, deleteHospital, updateHospital } = require("./hospital.service")

module.exports = {
    createHospital:(req,res) => {
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
                message:"Hospital added successfully"
            })
        })
    },
    getHospitalById:(req,res) => {
        const id = req.params.id
        getHospitalById(id, (err,results) => {
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

    updateHospital:(req,res) =>{
        const body = req.body
        updateHospital(body, (err,results) => {
            if (err){ 
                console.log(err)

                return res.json({
                    success:0,
                    message:"Hospital cannot be updated"
                })
            }
        return res.json({
                success:1,
                message:results
            })

        })

    },
    deleteHospital:(req,res) => {
        const id = req.params.id;
        deleteHospital(id, (err,results) => {
            if(err){
                console.log(err);
                return res.json({
                    success:0,
                    id:id,
                    message:"Hospital cannot be deleted"
                })
            }
            if(results.affectedRows == 0){
                return res.json({
                    success:0,
                    id:id ,
                    message:"Hospital not found"
                })
            }
            return res.json({
                success:1,
                message:"Hospital deleted successfully"
            })
        })
    },
    getHospital:(req,res) => {
        getHospital((err,results) => {
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