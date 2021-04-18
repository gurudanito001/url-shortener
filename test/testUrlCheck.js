const urlCheck = require("../validation/urlCheck");
var expect = require('chai').expect;

describe('#urlCheck()', function () {

    context('with existing url in database as a parameter', function () {
        it('should return object containing the existing url and true', async function (done) {
            let existingUrl = "https://jw.org"
            let result = await urlCheck(existingUrl, done());

            expect(result.exists)
                .to.be.a('boolean')
                .and.equal(true);

            expect(result.data.url)
                .to.be.a('string')
                .and.equal(existingUrl)
        });
    });

    context('with non-existing url in database as a parameter', function () {
        it('should return and object with data as null and false', async function (done) {
            let nonExistingUrl = "https://nonexistingurl.com"
            let result = await urlCheck(nonExistingUrl, done());

            expect(result.exists)
                .to.be.a('boolean')
                .and.equal(false);

            expect(result.data)
                .to.equal(null)
        });
    });

});