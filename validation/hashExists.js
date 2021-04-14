const Url = require("../models/url")

const hashExists = async (hash) => {
    let result = await Url.findOne({ hash: hash })
    if(result){
        return true
    }
    return false
}

module.exports = hashExists;