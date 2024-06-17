const {getBloodQuantity, getBloodQuantityById} = require("./bloodInventory.controller")

const router = require("express").Router();

router.get("/", getBloodQuantity);
router.get("/:id", getBloodQuantityById);


module.exports = router;