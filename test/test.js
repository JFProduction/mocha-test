var request = require('request'),
    expect = require('chai').expect,
    which = process.argv.slice(3)[0],
    baseUrl = 'https://swapi.co/api';

describe('getting the first response', function() {
    it('should get a good response', function(done) {
        request.get({ url: baseUrl + '/people/' + which +  '/' }, 
            (err, response, body) => {
                checkIfObjIsTheSame(JSON.parse(body));
                done();
            });
    })
})

function checkIfObjIsTheSame(old) {
    describe('checking if obj for ' + which + ' is the same', () => {
        it('should be the same', (done) => {
            request.get({ url: baseUrl + '/people/' + which + '/' }, 
                (err, response, body) => {
                    expect(JSON.parse(body)).to.deep.equal(old);
                    done();
                });
        });
    });
}