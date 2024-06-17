
const { createDonor,deleteDonor,getDonors } = require("./donor.controller")



const router = require("express").Router();

router.post("/", createDonor);
router.delete("/", deleteDonor);
router.get("/", getDonors);
module.exports = router;