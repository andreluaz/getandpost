'use strict';
const joi = require("joi");
const expect = require('chai').expect;
const supertest = require("supertest");
const url = supertest.agent("http://localhost:3000");
const joiAssert = require("joi-assert");

const {
    schemaValido
} = require("./schema/info.js");


const schema = joi.object().keys({
    a: joi.string().required()
});


describe("Teste Contrato API", function () {

    it('Validando GET com joiAssert', function (done) {
           url
            .get("/usuarios")
            //.expect('Content-Type', /json/)
            
            .end(function (err, res) {
                expect(res.status).to.be.eql(200);
                
                console.log(res.body);
                
                joi.validate( res.body , schemaValido);
                //joi.validate( 12312 , schema);
                //joi.validate(undefined, joi.string().required());
                //joiAssert(res.body, schemaValido);
                console.log(schemaValido);
                
                done();
            })
    })

})