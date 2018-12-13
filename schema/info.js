
'use strict';
const Joi = require('joi');

const schemaValido = Joi.array().items(Joi.object({
 nome: Joi.string().required(),
 location: Joi.string().required(),
 id: Joi.number().required()
 }));

 module.exports = {
  schemaValido
 }