import Joi from '@hapi/joi';

///{"panel":"test-1","forms":{"Form1":{"description":"a description","fields":[{"type":"string","id":"appTitle","name":"App Title","default":"Test App"},{"type":"boolean","id":"showButton","name":"Show Button","default":true}]}}}

interface SchemeValidationError<T> {
    value: T
    error?: Error
}

const stringFieldScheme = Joi.object({
    type: Joi.string().valid(...['string']),
    id: Joi.string().required(),
    name: Joi.string().required(),
    default: Joi.string().required()
})

const booleanFieldScheme = Joi.object({
    type: Joi.string().valid(...['boolean']),
    id: Joi.string().required(),
    name: Joi.string().required(),
    default: Joi.bool().required()
})

export const formScheme = Joi.object({
    id: Joi.string().min(1).max(1024).required(),
    name: Joi.string().min(1).max(1024).required(),
    description: Joi.string().min(1).max(1024),
    fields: Joi.array().items(...[stringFieldScheme, booleanFieldScheme])
})

