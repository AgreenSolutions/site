var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController");

router.get("/kpi1", function(req, res) {
    kpiController.buscarKpi1(req, res);
})

module.exports = router;