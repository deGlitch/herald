"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeFieldDescriptorArrayWithFieldDataArray = (fieldDescriptorArray, fieldDataArray) => {
    const mergedFields = [];
    const fieldIdList = fieldDescriptorArray.map(fieldDesc => fieldDesc.id);
    fieldDataArray.forEach(fieldData => {
        // if the iterated field is not included in the new descriptors return function
        if (!fieldIdList.includes(fieldData.id)) {
            return;
        }
        ;
        // get the new field desc
        const newFieldDesc = fieldDescriptorArray.find(fieldDesc => fieldDesc.id === fieldData.id);
        if (fieldData.type === newFieldDesc.type) {
            // if type didn't change, merge both the old data and the new desc and return
            mergedFields.push({
                ...newFieldDesc,
                value: fieldData.value
            });
            return;
        }
        // if type changed, merge the new desc with the default data
        mergedFields.push({
            ...newFieldDesc,
            value: newFieldDesc.default
        });
    });
    return mergedFields;
};
exports.mergeFormDescriptorArrayWithFormDataArray = (formsDescriptorsArray, formsDataArray) => {
    const mergedForms = [];
    // get the ids of the new descriptor list
    const newDescriptorsIdList = formsDescriptorsArray.map(formDesc => formDesc.id);
    formsDataArray.forEach(formData => {
        // if the iterated form is not included in the new descriptors return function
        if (!newDescriptorsIdList.includes(formData.id)) {
            return;
        }
        // get the new form desc
        const formDescriptor = formsDescriptorsArray.find(formDesc => formDesc.id === formData.id);
        mergedForms.push({
            ...formDescriptor,
            fields: mergeFieldDescriptorArrayWithFieldDataArray(formDescriptor.fields, formData.fields)
        });
    });
    return mergedForms;
};
exports.convertFormDescriptorsToFormDataArray = (formDescriptorArray) => {
    return formDescriptorArray.map(formDesc => ({
        fields: formDesc.fields.map(fieldDesc => ({
            ...fieldDesc,
            value: fieldDesc.default
        }))
    }));
};
exports.FormConverter = {
    mergeFormDescriptorArrayWithFormDataArray: exports.mergeFormDescriptorArrayWithFormDataArray,
    convertFormDescriptorsToFormDataArray: exports.convertFormDescriptorsToFormDataArray
};
