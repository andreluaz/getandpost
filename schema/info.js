
'use strict';
const Joi = require('joi');

const schemaValido = Joi.object({
 nome: Joi.number().required(),
 location: Joi.boolean().required()
 });

 module.exports = {
  schemaValido
 }