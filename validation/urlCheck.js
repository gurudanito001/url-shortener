const Url = require("../models/url")

const urlCheck = async (url) => {
    let result = await Url.findOne({ url: url })
    if(result){
        return {
            exists: true,
            data: result
        }
    }
    return {
        exists: false,
        data: null
    }
}

module.exports = urlCheck;