const { string } = require('@hapi/joi')
const joi = require('@hapi/joi')

module.exports = {
    registerValidation : (data)=>{
    const schema = joi.object({
        name: joi.string().min(6).required(),
        password: joi.string().min(6).required(),
        email: joi.string().min(6).required().email()
    })

    return schema.validate(data);
},
    loginValidation : (data)=>{
    const schema2 = joi.object({
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    })

    return schema2.validate(data);
    }
}

