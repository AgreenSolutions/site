var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController");


// Modal 1

router.get("/kpi1", function(req, res) {
    kpiController.buscarKpi1(req, res);
})
router.get("/kpi2", function(req, res) {
    kpiController.buscarKpi2(req, res);
})
router.get("/kpi3", function(req, res) {
    kpiController.buscarKpi3(req, res);
})
router.get("/kpi4", function(req, res) {
    kpiController.buscarKpi4(req, res);
})
router.get("/kpi5", function(req, res) {
    kpiController.buscarKpi5(req, res);
})
router.get("/kpi6", function(req, res) {
    kpiController.buscarKpi6(req, res);
})

// Modal 2

router.get("/kpi7", function(req, res) {
    kpiController.buscarKpi1(req, res);
})
router.get("/kpi8", function(req, res) {
    kpiController.buscarKpi2(req, res);
})
router.get("/kpi9", function(req, res) {
    kpiController.buscarKpi3(req, res);
})
router.get("/kpi10", function(req, res) {
    kpiController.buscarKpi4(req, res);
})
router.get("/kpi11", function(req, res) {
    kpiController.buscarKpi5(req, res);
})
router.get("/kpi12", function(req, res) {
    kpiController.buscarKpi6(req, res);
})

// Modal 3

router.get("/kpi13", function(req, res) {
    kpiController.buscarKpi1(req, res);
})
router.get("/kpi14", function(req, res) {
    kpiController.buscarKpi2(req, res);
})
router.get("/kpi15", function(req, res) {
    kpiController.buscarKpi3(req, res);
})
router.get("/kpi16", function(req, res) {
    kpiController.buscarKpi4(req, res);
})
router.get("/kpi17", function(req, res) {
    kpiController.buscarKpi5(req, res);
})
router.get("/kpi18", function(req, res) {
    kpiController.buscarKpi6(req, res);
})

// Modal 4

router.get("/kpi19", function(req, res) {
    kpiController.buscarKpi1(req, res);
})
router.get("/kpi20", function(req, res) {
    kpiController.buscarKpi2(req, res);
})
router.get("/kpi21", function(req, res) {
    kpiController.buscarKpi3(req, res);
})
router.get("/kpi22", function(req, res) {
    kpiController.buscarKpi4(req, res);
})
router.get("/kpi23", function(req, res) {
    kpiController.buscarKpi5(req, res);
})
router.get("/kpi24", function(req, res) {
    kpiController.buscarKpi6(req, res);
})


module.exports = router;