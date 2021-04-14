const router = require("express").Router();
const Url = require("../models/url");

router.route('/:hash').get( async (req, res) =>{
    let url = await Url.findOne({ hash: req.params.hash })
    if(url){
        return res.redirect(`${url.url}`);
    }
    return res.send('<h4>Url Not found</h4>')
});

module.exports = router;