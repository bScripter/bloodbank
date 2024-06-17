const {getCampaign, getCampaignById, insertCampaign } = require("./campaign.controller");


const router = require("express").Router();

router.get("/", getCampaign);
router.get("/:id", getCampaignById)
router.post("/",insertCampaign)

module.exports = router;