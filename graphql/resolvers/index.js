const Url = require("../../models/url");
const genHash = require("../../utils/generateHash");
const urlCheck = require("../../validation/urlCheck");
const isValidUrl = require("../../validation/isValidUrl");
const { API_URL } = require("../../config")

module.exports = {

    urls: async () => {
        try {
            const fetchedUrls = await Url.find()
            return fetchedUrls.map( url => {
                return {
                    ...url._doc,
                    _id: url.id,
                    createdAt: new Date(url._doc.createdAt).toISOString(),
                    shortUrl: `${API_URL}/${url._doc.hash}`
                }
            })
        } catch (error) {
            throw error
        }
    },

    shortenUrl: async args => {
        try {
            const { url } = args
            if(!isValidUrl(url)){
                throw new Error("This is not a valid Url")
            }
            const urlCheckResults = await urlCheck(url)
            if( urlCheckResults.exists ){
                console.log("Url already exists")
                return urlCheckResults.data
            }
            const newUrl = new Url({
                url,
                hash: await genHash()
            })
            const savedUrl = await newUrl.save()
            return { 
                ...savedUrl._doc, 
                createdAt: new Date(savedUrl._doc.createdAt).toISOString(),
                shortUrl: `${API_URL}/${savedUrl._doc.hash}`
            } 
        } catch (error) {
            throw error
        }
    }
}