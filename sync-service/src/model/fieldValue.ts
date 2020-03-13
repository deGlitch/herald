import fs from 'fs';
import { PanelID, FieldID, UniquePanelFieldID } from "../interfaces";
import PathConfig from '../configuration/path';
import { SupportedValueTypes } from '../../../packages/src/interfaces';
const fsPromises = fs.promises;

export interface SavedFieldValue {
    type: string,
    value: SupportedValueTypes
}

export default {
    /**
     * gets a s
     * @param panelID 
     * @param formID 
     * @param fieldID 
     */
    async get(panelID: PanelID, id: UniquePanelFieldID) : Promise<SavedFieldValue | undefined> {
        const filePath = PathConfig.createValuesFileLocation(panelID, id);
        try {
            await fsPromises.access(filePath);
            const bufferData = await fsPromises.readFile(filePath)
            return JSON.parse(bufferData.toString())
        } catch (error) {
            //TOOD: add logging
            return undefined;
        }
    },
    async set(panelID: PanelID, id: UniquePanelFieldID, value: SavedFieldValue){
        const filePath = PathConfig.createValuesFileLocation(panelID, id);
        await fsPromises.writeFile(filePath, JSON.stringify(value));
    },
    async delete(panelID: PanelID, id: UniquePanelFieldID){
        const filePath = PathConfig.createValuesFileLocation(panelID, id);
        try {
            await fsPromises.access(filePath);
            await fsPromises.unlink(filePath);
        } catch (error) {
            //TODO: add logging
            return;
        }
    },
    async list(panelID: PanelID) : Promise<FieldID[]> {
        const folderPath = PathConfig.createValuesFolderLocation(panelID);
        return await fsPromises.readdir(folderPath)
    }
}