import { PanelID, FormID, FieldID, UniquePanelFieldID } from "../interfaces";

export default {
    create(panelID: PanelID, formID: FormID, fieldID: FieldID) : UniquePanelFieldID {
        return `${panelID}-${formID}-${fieldID}`
    }
}