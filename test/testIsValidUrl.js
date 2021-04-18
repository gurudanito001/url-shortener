const isValidUrl = require("../validation/isValidUrl");
var expect = require('chai').expect;

describe('#isValidUrl()', function () {

    context('with invalid url as parameter', function () {
        it('should return false', function () {
            expect(isValidUrl("notAValidUrl")).to.equal(false);
        })
    })

    context('with valid url as parameter', function () {
        it('should return true', function () {
            expect(isValidUrl("https://jw.org")).to.equal(true);
        })
    })

    context('with url without protocol as parameter', function () {
        it('should return false', function () {
            expect(isValidUrl("jw.org")).to.equal(false);
        })
    })

})