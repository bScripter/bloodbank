const { getRequests,insertRequest, getRequestsById } = require("./request.controller")


const router = require("express").Router();

router.get("/", getRequests);
router.post("/", insertRequest)
router.get("/:id", getRequestsById)

module.exports = router;