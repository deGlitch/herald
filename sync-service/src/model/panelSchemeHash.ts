import PathConfig from '../configuration/path';
import fs from 'fs';
import { PanelID } from '../interfaces';
import logger from '../services/logger';
const fsPromises = fs.promises;
type TSchemeHash = String

export default {
    async set(panelID: PanelID, schemeHash: TSchemeHash){
        const filePath = PathConfig.createSchemeHashLocation(panelID);
        await fsPromises.writeFile(filePath, schemeHash);
    },
    async get(panelID: PanelID) : Promise<TSchemeHash | undefined> {
        const filePath = PathConfig.createSchemeHashLocation(panelID);

        try {
            // on non existant file or permission error will throw
            await fsPromises.access(filePath)
            const data = (await fsPromises.readFile(filePath)).toString();
            return data;
        } catch (error) {
            logger.log('verbose', `tried to get ${panelID} scheme hash file but it failed`)
            logger.log('verbose', `${error}`) //TODO: consider chaning to error/warn
            return undefined
        }
    },
    async delete(panelID: PanelID){
        const filePath = PathConfig.createSchemeHashLocation(panelID);
        try {
            // on non existant file or permission error will throw
            await fsPromises.access(filePath);
            await fsPromises.unlink(filePath);
        } catch (error) {
            logger.log('verbose', `tried to delete ${panelID} scheme hash file but it failed`)
            logger.log('verbose', `${error}`) //TODO: consider chaning to error/warn
            return;
        }
    }
}
