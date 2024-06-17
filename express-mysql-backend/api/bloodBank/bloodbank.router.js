
const { createBloodBank,getBloodBank,updateBloodBank, deleteBloodBank,getBloodBankById } = require("./bloodbank.controller")



const router = require("express").Router();

router.post("/", createBloodBank);
router.delete("/:id", deleteBloodBank);
router.get("/", getBloodBank);
router.get("/:id", getBloodBankById);
router.put("/", updateBloodBank);

module.exports = router;