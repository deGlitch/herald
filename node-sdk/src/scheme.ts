import { formScheme } from '../../shared/scheme'
import Joi = require('../../shared/node_modules/@types/hapi__joi')

///{"panel":"test-1","forms":{"Form1":{"description":"a description","fields":[{"type":"string","id":"appTitle","name":"App Title","default":"Test App"},{"type":"boolean","id":"showButton","name":"Show Button","default":true}]}}}

interface SchemeValidationError<T> {
    value: T
    error?: Error
}

export const configYamlScheme = Joi.object({
    panel: Joi.string().min(1).max(256).required(),
    forms: Joi.any().required()
})

export const validateConfigObject = <T>(configObject : T) : SchemeValidationError<T> => {
    // root level validation
    const { error, value } = configYamlScheme.validate(configObject)
    if(error){
        return { value: configObject, error }
    }

    // form level validation
    const { forms } = value;
    const formValidationErrors : string[] = [];
    Object.entries(forms)
    .map(idToFormArray => ({ id: idToFormArray[0], ...idToFormArray[1] as Object }))
    .forEach(form => {
        const { error } = formScheme.validate(form);
        if(error){ formValidationErrors.push(error.message); }
    });

    if(formValidationErrors.length > 0){
        return { value: configObject, error: new Error(formValidationErrors.join())}
    }
    
    return { value: configObject, error: undefined };
}