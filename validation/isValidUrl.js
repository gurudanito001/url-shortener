const validator = require("validator")

const isValidUrl =  (url) => {
    return validator.isURL(
        url, 
        { require_protocol: true }
    )
}

module.exports = isValidUrl;

/*
TEST CONDITIONS

isValidUrl() should return true if url is valid
and return false if url is not valid

urls without protocols("http", "https", "ftp")
will return false as invalid

*/