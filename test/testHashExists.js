const hashExists = require("../validation/hashExists");
var expect = require('chai').expect;

  describe('#hashExists()', function() {
    context('with existing hash as a parameter', function () {
      it('should return true', async function(done) {
        let result = await hashExists("xmfgaa", done());

        expect(result)
          .to.be.a('boolean')
          .and.equal(true);
      });
    });

    context('with non-existing hash as a parameter', function () {
      it('should return false', async function(done) {
        let result = await hashExists("aaaaaa", done());

        expect(result)
          .to.be.a('boolean')
          .and.equal(false);
      });
    });
  });