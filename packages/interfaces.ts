
export interface BaseProject {
    name: String,
}

export interface PanelDescriptor {
    forms: FormDescriptor[]
}

export interface PanelData {
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

export interface FormDescriptor extends BaseForm {
    fields: FieldDescriptor[]
}

interface BaseField {
    type: string
    id: string
    name: string
}

export type FieldData = StringField | BooleanField

// the actual string field with value
interface StringField extends BaseField {
    value: string
}

// the actual boolean field with value
interface BooleanField extends BaseField {
    value: boolean
}

export type FieldDescriptor = StringFieldDescriptor | BooleanFieldDescriptor

interface StringFieldDescriptor extends BaseField {
    default: string
}

interface BooleanFieldDescriptor extends BaseField {
    default: boolean
}

export interface CommandPostFile {
    panel: string
    forms: { [key:string] : FormDescriptor }
}