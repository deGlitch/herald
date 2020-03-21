
export interface PanelDescriptor {
    forms: FormScheme[]
}

export interface PanelData {
    panel: string,
    forms: FormData[]
}

interface BaseForm {
    name: string
    id: string
    description?: string
}

export interface FormData extends BaseForm {
    fields: FieldData[]
}

export interface FormScheme extends BaseForm {
    fields: IFieldDescriptor[]
}

interface IBaseField {
    type: string
    id: string
    name: string
}

// the supported types of schemes currantly
export type SupportedValueTypes = boolean | string

// contains all the supported fields
export type FieldData = IStringField | IBooleanField

// the actual string field with value
interface IStringField extends IBaseField {
    value: string
}

// the actual boolean field with value
interface IBooleanField extends IBaseField {
    value: boolean
}

export type IFieldDescriptor = StringFieldDescriptor | BooleanFieldDescriptor

interface StringFieldDescriptor extends IBaseField {
    default: string
}

interface BooleanFieldDescriptor extends IBaseField {
    default: boolean
}

export interface IPanelScheme {
    panel: string
    forms: { [key:string] : FormScheme }
}