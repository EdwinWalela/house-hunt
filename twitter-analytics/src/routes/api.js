const router = require("express").Router();
const areaRoutes = require('./areas');

router.use('/areas',areaRoutes)

module.exports = router;
