import Joi from 'joi'

export const userSchema = Joi.object({
    name: Joi.string().min(7).message("Name must be 7 Charater").max(20).message("Name is too long").required(),
    email: Joi.string().email({ tlds: { allow: false } }).message("invalid email address").custom(value => value.trim()).pattern(new RegExp(/^\S+$/)).message("Field can not contain spaces").required(),
    password: Joi.string().min(8).message("Password length should be 8 or more").max(15).message("Password length should not be more than 15 characters long").custom(value => value.trim()).pattern(new RegExp(/^\S+$/)).message("Field can not contain spaces").required(),
    confirmPassword: Joi.valid(Joi.ref("password")).required().messages({ "any.only": "Password does not match" }),
})


