import fs from 'fs';
import PathConfig from '../configuration/path';
import { PanelID } from '../interfaces';
import { IPanelScheme } from '../../../packages/src/interfaces';
const fsPromises = fs.promises;

export default {
    async exists(panelID: PanelID) : Promise<boolean> {
        try {
            await fsPromises.access(PathConfig.createSchemeLocation(panelID));
            return true
        } catch (error) {
            return false
        }
    },
    async get(panelID: PanelID) : Promise<IPanelScheme | undefined>{
        const schemePath = PathConfig.createSchemeLocation(panelID)
        try {
            await fsPromises.access(schemePath);
            const bufferData = await fsPromises.readFile(schemePath)
            return JSON.parse(bufferData.toString())
        } catch (error) {
            return undefined;
        }
    },
    async set(panelID: PanelID, configScheme : IPanelScheme){
        const schemePath = PathConfig.createSchemeLocation(panelID)
        await fsPromises.writeFile(schemePath, JSON.stringify(configScheme));
    },
    async delete(panelID: PanelID){
        const schemePath = PathConfig.createSchemeLocation(panelID)
        try {
            await fsPromises.access(schemePath);
            await fsPromises.unlink(schemePath);
        } catch (error) {
            //TODO: logging
            return;
        }
    },
}