
const {  createHospital, getHospital, getHospitalById, updateHospital, deleteHospital} = require("./hospital.controller")


const router = require("express").Router();

router.post("/", createHospital);
router.delete("/:id", deleteHospital);
router.get("/", getHospital);
router.get("/:id", getHospitalById);
router.put("/", updateHospital);

module.exports = router;