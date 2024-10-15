var request = require('supertest');
var app = require('./index.js');

describe('GET /', function() {
    it('respond with hello world', function(done) {
        request(app).get('/').expect('{ "response": "Hello World!!" }', done);
    });
});

describe('GET /authors', function() {
    it('respond with authors', function(done) {
        request(app).get('/authors').expect('{ "response": " - N.Siddarthan & Shafeeq Ahamed S" }', done);
    });
});

describe('GET /greetings', function() {
    it('respond with greetings', function(done) {
        request(app).get('/greetings').expect('{ "response": "Welcome, all" }', done);
    });
});

describe('GET /ready', function() {
    it('respond with ready message', function(done) {
        request(app).get('/ready').expect('{ "response": " Great!, It works!" }', done);
    });
});
