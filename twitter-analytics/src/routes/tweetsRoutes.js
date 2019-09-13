const router = require("express").Router();
const Tweet = require("../../models/Tweet");

router.get('/',async(req,res)=>{
    let results;
    try {
        results = await Tweet.find({});
    } catch (err) {
        console.log(err);
        res.status(500).send({
            msg:"error",
            err
        })
        return;
    }
    res.send({
        msg:"OK",
        results
    })
})

module.exports = router;