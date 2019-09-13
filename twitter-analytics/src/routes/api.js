const router = require("express").Router();
const areaRoutes = require('./areas');
const crawlerRoutes = require("./crawlerRoutes");

router.use('/areas',areaRoutes);
router.use('/crawler',crawlerRoutes);

module.exports = router;
