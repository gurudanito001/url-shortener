module.exports = {
    ATLAS_URI: process.env.ATLAS_URI || "mongodb+srv://nwokocha95:nwokocha95@cluster0.fbrwv.mongodb.net/ShortenUrl?retryWrites=true&w=majority",
    PORT: process.env.PORT || 5000,
    OPTIONS: { useNewUrlParser: true, useUnifiedTopology: true },
    API_URL: "https://shrtnlinks.herokuapp.com"
}