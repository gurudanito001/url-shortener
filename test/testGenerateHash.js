const genHash = require("../utils/generateHash");
var expect = require('chai').expect;

describe('#genHash()', function () {
    it('should return a six character hash string', async function (done) {
        let result = await genHash(done());

        expect(result).to.be.a('string')
        expect(result).to.have.lengthOf(6)
    });
});