import { expect } from 'chai';
import { FormJoiScheme } from '../src/scheme'

const validForm = {
    id: "id",
    name: "test-id"
}

const validFormWithDescriptions = {
    ...validForm,
    description: 'description test'
}

const validStringField = {
    type: "string",
    id: "test-id",
    name: "test-name",
    default: "deafult value"
}

const invalidStringField = {
    type: "string",
    id: "test-id",
    name: "test-name",
    default: true
}

const validBoolField = {
    type: "boolean",
    id: "test-id",
    name: "test-name",
    default: true
}

const invalidBoolField = {
    type: "boolean",
    id: "test-id",
    name: "test-name",
    default: "invalid value"
}

const validFormWithFields = {
    ...validForm,
    fields: [
        validStringField,
        validBoolField
    ]
}

const validFormWithDescriptionAndFields = {
    ...validFormWithDescriptions,
    fields: [
        validStringField,
        validBoolField
    ]
}

const invalidFormWithDescriptionAndInvalidBoolField = {
    ...validFormWithDescriptions,
    fields: [
        validStringField,
        invalidBoolField
    ]
}

const invalidFormWithDescriptionAndInvalidStringField = {
    ...validFormWithDescriptions,
    fields: [
        invalidStringField,
        validBoolField
    ]
}

describe('formScheme validate function', () => {
    it('should find the bare bones form valid', () => {
        const { error } = FormJoiScheme.validate(validForm)
        expect(error).to.be.undefined
    })
    it('should find the form with description valid', () => {
        const { error } = FormJoiScheme.validate(validFormWithDescriptions)
        expect(error).to.be.undefined
    })
    it('should find the form with fields valid', () => {
        const { error } = FormJoiScheme.validate(validFormWithFields)
        expect(error).to.be.undefined
    })
    it('should find the form with description and fields valid', () => {
        const { error } = FormJoiScheme.validate(validFormWithDescriptionAndFields)
        expect(error).to.be.undefined
    })
    it('should find an empty form invalid', () => {
        const { error } = FormJoiScheme.validate({})
        expect(error).to.not.be.undefined
    })
    it('should find an a form with an invalid string field, invalid', () => {
        const { error } = FormJoiScheme.validate(invalidFormWithDescriptionAndInvalidStringField)
        expect(error).to.not.be.undefined
    })
    it('should find an a form with an invalid bool field, invalid', () => {
        const { error } = FormJoiScheme.validate(invalidFormWithDescriptionAndInvalidBoolField)
        expect(error).to.not.be.undefined
    })
})