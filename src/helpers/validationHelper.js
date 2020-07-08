import * as joi from '@hapi/joi';

module.exports = {
    registerValidation: data => {
        const schema = joi.object({
            firstName: joi.string().min(2).required(),
            lastName: joi.string().min(2).required(),
            email: joi.string().email().min(6).required(),
            password: joi.string().min(6).required(),
            securityAnswer1: joi.string().required(),
            securityAnswer2: joi.string().required(),
            securityAnswer3: joi.string().required()
        });
        return schema.validate(data);
    },

    loginValidation: data => {
        const schema = joi.object({
            email: joi.string().email().min(6).required(),
            password: joi.string().min(6).required()
        });
        return schema.validate(data);
    },

    isbnValidation: data => {
        const schema = joi.object({
            isbn: joi.string().min(10).max(13).required()
        });
        return schema.validate(data);
    },

    passwordValidation: data => {
        const schema = joi.object({
            password: joi.string().min(6).required()
        });
        return schema.validate(data);
    },

    emailValidation: data => {
        const schema = joi.object({
            email: joi.string().email().min(6).required()
        });
        return schema.validate(data);
    }
};
