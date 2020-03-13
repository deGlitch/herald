import { IPanelScheme, IFieldDescriptor, FormScheme } from "../../../packages/src/interfaces";
import uniqueFieldIdCreator from "./panelUniqueFieldIdCreator";
import { UniquePanelFieldID } from "../interfaces";


interface FieldValueObject {
    value: any,
    type: string
}

export interface FieldWithPanelUniqueFieldId {
    id: UniquePanelFieldID
    field: IFieldDescriptor
}

/**
 * takes a config scheme and parses out all fields and maps them to a unique panel id
 * generated from the panel id form id and field id
 * @param panel 
 */
const parseFieldsWithUniquePanelIdsArray = (panel: IPanelScheme) : FieldWithPanelUniqueFieldId[]  => {
    let fieldsWithUniquePanelIdsArray : FieldWithPanelUniqueFieldId[] = [];
    Object.values(panel.forms).forEach(form => {
        form.fields.forEach(field => {
            fieldsWithUniquePanelIdsArray.push({
                id: uniqueFieldIdCreator.create(panel.panel, form.id, field.id),
                field
            })
        })
    })
    return fieldsWithUniquePanelIdsArray;
}

export default {
    parseFieldsWithUniquePanelIdsArray
}