const validator = require("validator")

const isValidUrl =  (url) => {
    return validator.isURL(
        url, 
        { require_protocol: true }
    )
}

module.exports = isValidUrl;