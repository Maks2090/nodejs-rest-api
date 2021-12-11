const Joi = require("joi");

const contactSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().min(5).required(),
    phone: Joi.string(),
});

module.exports = contactSchema;