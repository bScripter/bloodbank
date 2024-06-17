const { getUser } =  require("./user.controller")

const router = require("express").Router();

router.get("/", getUser);

module.exports = router;