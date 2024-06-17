const {getUser} = require("./user.service")

module.exports = {
getUser:(req,res) => {
    getUser((err,results) => {
        if(err){
            return res.json({error: err})
        }
        return res.json({
            success:1,
            message:results
        })
    })
},
}