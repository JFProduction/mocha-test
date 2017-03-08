var request = require('request'),
    chakram = require('chakram'),
    expect = require('chai').expect,
    baseUrl = 'https://swapi.co/api';

// with request
describe('return luke', () => {
    it('should return luke', (done) => {
        request.get({ url: baseUrl + '/people/1/' },
            (err, resp, body) => {
                var luke = JSON.parse(body);
                expect(luke.name).to.equal('Luke Skywalker');
                expect(luke.hair_color).to.equal('blond');
                expect(resp.statusCode).to.equal(200);
                // console.log(JSON.stringify(luke, null, 2));
                done();
            });
    });
});

// with chakram
describe('return luke with chakram', () => {
    it('should return luke skywalker', () => {
        return chakram.get(baseUrl + '/people/1/').then((resp) => {
            var luke = resp.body;
            expect(luke.name).to.equal('Luke Skywalker');
            expect(resp.response.statusCode).to.equal(200);
        });
    });
});

describe('return user', () => {
    it('should return a user', (done) => {
        request.get({ url: 'http://localhost:3090/user/eb1a1663-476d-4870-9a43-8e58acf15ccd' }, 
            (err, resp, body) => {
                var user = JSON.parse(body);
                expect(resp.statusCode).to.equal(200);
                expect(user.user_name).to.equal('jimmyfargo');
                // console.log(JSON.stringify(user, null, 2));
                done();
            });
    });
});