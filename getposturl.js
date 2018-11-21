const supertest = require("supertest");
const should = require("should");
const expect = require("chai").expect;
//assert  = require('assert');
//const corpo = '{nome : "Danilo", location : "BR"}';
const url = supertest.agent("http://localhost:3000");

//Ler arquivo info.txt
const fs = require("fs");
var corpo = fs.readFileSync("info.txt");

//console.log(JSON.parse(corpo));

describe("Consumindo uma API Json-Server", function () {

    it("Realizar uma requsição GET", function (done) {

        url
            .get("/usuarios")
            .expect("Content-type", /json/)
            .end(function (err, res) {
                expect(res.status).to.be.eql(200);
                done()
            });
    });

    it("Realizar um POST", function (done) {
        url
            .post("/usuarios")
            .send(JSON.parse(corpo))
            .expect("Content-type", /json/)
            .end(function (err, res) {
                res.status.should.equal(201)
                done()
            });
    });

});