let expect = require('chai').expect,
    args = process.argv;


describe('get the arguments', function() {
    it('args should have 1 in it', function(done) {
        expect(args.splice(3)[0]).to.equal('1')
        done()
    })
})