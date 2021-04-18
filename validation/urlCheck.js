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


/*
TEST CONDITIONS

urlCheck() checks if url already exists in database(has already been shortened)
urlCheck() should return an object
object contains two properties => {exists: bool, data: object || null}

if url exists, urlCheck will return an object => {exists: true, data: (the existing url)}
if url !exist, urlCheck will return an object => {exists: false, data: null}

*/