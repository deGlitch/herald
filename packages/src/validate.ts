import { PanelSchemeJoiScheme, FormJoiScheme } from './scheme';
import { IPanelScheme } from './interfaces';

interface SchemeValidationError<T> {
    value: T
    error?: Error
}

export const validateConfigSchemeObject = (panelSchemeObject : IPanelScheme) : SchemeValidationError<IPanelScheme> => {
    // root level validation
    const { error, value } = PanelSchemeJoiScheme.validate(panelSchemeObject)
    if(error){
        return { value: panelSchemeObject, error }
    }

    // form level validation
    const { forms } = value;
    const formValidationErrors : string[] = [];
    Object.entries(forms)
    .map(idToFormArray => ({ id: idToFormArray[0], ...idToFormArray[1] as Object }))
    .forEach(form => {
        const { error } = FormJoiScheme.validate(form);
        if(error){ formValidationErrors.push(error.message); }
    });

    if(formValidationErrors.length > 0){
        return { value: panelSchemeObject, error: new Error(formValidationErrors.join())}
    }
    
    return { value: panelSchemeObject, error: undefined };
}