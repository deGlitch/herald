import { Request, Response, NextFunction} from "express";
import Joi from '@hapi/joi';

export const validate = (scheme : Joi.ObjectSchema<any>) => {
    return (req : Request, res : Response, next : NextFunction) => {
        const { error } = scheme.validate(req)
        if(error){
            res.statusCode = 400
            res.json({
                error: error.message
            })

            next(error)
        }

        next()
    }
}