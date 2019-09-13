const router = require("express").Router();
const areaRoutes = require('./areas');
const crawlerRoutes = require("./crawlerRoutes");
const tweetRoutes = require("./tweetsRoutes");

router.use('/areas',areaRoutes);
router.use('/crawler',crawlerRoutes);
router.use('/tweets',tweetRoutes);

module.exports = router;
