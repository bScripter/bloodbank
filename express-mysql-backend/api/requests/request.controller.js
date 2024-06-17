const {getRequests,insertRequest,getRequestsById} = require("./request.service")

module.exports = {
    getRequests:(req,res) => {
        getRequests((err,results) => {
            if(err){
                return res.json({error: err})
            }
            return res.json({
                success:1,
                message:results
            })
        })
    },
    insertRequest:(req,res) => {
        const body = req.body;
    
        insertRequest(body, (err,results) => {
                if (err){ 
                    console.log(err);
                    return res.json({
                        success:0,
                        message:err,
                    })
                }
            return res.json({
                    success:1,
                    message:"Request added successfully"
                })
            })
        },
        
    getRequestsById:(req,res) => {
        const id = req.params.id
        getRequestsById(id, (err,results) => {
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
}