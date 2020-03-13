import Joi from '@hapi/joi';

///{"panel":"test-1","forms":{"Form1":{"description":"a description","fields":[{"type":"string","id":"appTitle","name":"App Title","default":"Test App"},{"type":"boolean","id":"showButton","name":"Show Button","default":true}]}}}

const StringFieldJoiScheme = Joi.object({
    type: Joi.string().valid(...['string']),
    id: Joi.string().required(),
    name: Joi.string().required(),
    default: Joi.string().required()
});

const BooleanFieldJoiScheme = Joi.object({
    type: Joi.string().valid(...['boolean']),
    id: Joi.string().required(),
    name: Joi.string().required(),
    default: Joi.bool().required()
});

export const FormJoiScheme = Joi.object({
    id: Joi.string().min(1).max(1024).required(),
    name: Joi.string().min(1).max(1024).required(),
    description: Joi.string().min(1).max(1024),
    fields: Joi.array().items(...[StringFieldJoiScheme, BooleanFieldJoiScheme])
});

export const PanelSchemeJoiScheme = Joi.object({
    panel: Joi.string().min(1).max(256).required(),
    forms: Joi.any().required()
})

