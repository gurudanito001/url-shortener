const resolvers = require("../graphql/resolvers/");
const expect = require("chai").expect;

describe('#resolvers.urls()', function () {
    it('should return an array of urls', async function (done) {
        let result = await resolvers.urls(done());

        expect(result).to.be.a('array')
    });
});

describe('#resolvers.shortenUrl()', function () {
    it('should return an object of url', async function (done) {
        let url = "https://wol.jw.org";
        let result = await resolvers.shortenUrl( url, done());

        expect(result).to.be.a('object')
    });
});