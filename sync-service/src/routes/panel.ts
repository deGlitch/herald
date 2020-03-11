import Joi from '@hapi/joi';
import { formScheme } from '../../../packages/scheme'

export const SchemeUpdate_PUT = Joi.object({
    params: {
        panelId: Joi.string().required()
    },
    body: Joi.array().items(formScheme)
})

export const Ping_POST = Joi.object({
    body: {
        panel: Joi.string().min(1).max(256).required()
    }
})