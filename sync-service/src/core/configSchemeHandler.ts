import { IPanelScheme, IFieldDescriptor } from "../../../packages/src/interfaces";
import crypto from 'crypto';
import { PanelSchemeHash, PanelScheme, FieldValue } from "../model";
import configParser, { FieldWithPanelUniqueFieldId } from "../lib/configParser";
import panelScheme from "../model/panelScheme";
import { UniquePanelFieldID } from "../interfaces";

const handleConfigSchemeUpdate = async (newPanelScheme : IPanelScheme) => {
    // get the panel id
    const panelId = newPanelScheme.panel;

    // create hash
    const schemeHash = crypto.createHash('md5').update(JSON.stringify(newPanelScheme)).digest('hex');

    // update hash
    await PanelSchemeHash.set(panelId, schemeHash)

    // parse out the fields from the new config scheme
    const newPanelFieldsArray = configParser.parseFieldsWithUniquePanelIdsArray(newPanelScheme);

    /* remove unused fields */

    const newPanelFieldIds = newPanelFieldsArray.map(field => field.id);
    const fieldsIdsArrayToDelete : UniquePanelFieldID[] = (await FieldValue.list(panelId))
    .filter(fieldID => !newPanelFieldIds.includes(fieldID))

    // we wait for the update phase to actually delete them

    /* create/update new and existing fields */

    // creaete an empty array of fields to save
    var fieldsToSave : FieldWithPanelUniqueFieldId[] = [];

    // check if previous scheme exists
    if(!PanelScheme.exists(panelId)){
        // if it doesn't exist
        fieldsToSave.push(...newPanelFieldsArray)
    } else {

        // read the existing scheme
        const existingScheme = await PanelScheme.get(panelId) as IPanelScheme;
        const existingPanelFieldsArray = configParser.parseFieldsWithUniquePanelIdsArray(existingScheme);

        // you need to save a field in two cased
        // 1 - an existing field changed type
        // 2 - a non existant field was created

        for(let i=0;i<newPanelFieldsArray.length;i++){
            const newField = newPanelFieldsArray[i];

            // check if field already existed in old scheme
            const existingFieldInOldScheme = existingPanelFieldsArray.find(field => field.id === newField.id)
            if(existingFieldInOldScheme){
                // field existed

                // check if type changed
                if(existingFieldInOldScheme.field.type !== newField.field.type){
                    // type changed
                    fieldsToSave.push(newField);
                } else {
                    // type didn't change
                    continue
                }
            } else {
                // field did not exist
                fieldsToSave.push(newField)
            }
        }
    }

    /* Update Phase */

    await Promise.all([
        PanelScheme.set(panelId, newPanelScheme), // scheme update
        ...fieldsIdsArrayToDelete.map(fieldID => FieldValue.delete(panelId, fieldID)), // field deletion
        ...fieldsToSave.map(({ id, field }) => FieldValue.set(panelId, id, { type: field.type, value: field.default })) // field creation and update
    ])
}

export default {
    handleConfigSchemeUpdate
}