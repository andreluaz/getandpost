'use strict';
const joi = require("joi");
const expect = require('chai').expect;
const supertest = require("supertest");
const url = supertest.agent("http://localhost:3000");
const joiAssert = require("joi-assert");

const {
    schemaValido
} = require("./schema/info.js");

describe("Teste Contrato API", function () {

    it('Validando GET com joiAssert', function (done) {
           url
            .get("/usuarios")
            .expect('Content-Type', /json/)
            
            .end(function (err, res) {
                expect(res.status).to.be.eql(200);
                joiAssert(res.body, schemaValido);                
                done();
            })
    })

     it('Validando GET com joi validate', function (done) {
        url
         .get("/usuarios")
         .expect('Content-Type', /json/)
         
         .end(function (err, res) {
             expect(res.status).to.be.eql(200);
             joi.validate(res.body, schemaValido);
             done();
         })
    })
 
})