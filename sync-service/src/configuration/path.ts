import os from 'os';
import querystring from 'querystring';
import { PanelID, FormID, FieldID, UniquePanelFieldID } from '../interfaces';
import uniqueFieldIdCreator from '../lib/panelUniqueFieldIdCreator';
import { query } from 'winston';

const { username } = os.userInfo()
let applicationFileRootDir;

switch(process.platform){
    case "win32":
        break;
    case "linux":
        break;
    case "darwin":
        applicationFileRootDir = `/Users/${username}/Library/Application Support`
        break;
    default:
        throw new Error("This program cannot run on the operating system")
}

const rootFolder = `${applicationFileRootDir}/command-pod`
const panelsFolder = `${rootFolder}/panels`

const createSpecificPanelFodler = (panelID: PanelID) => {
    const escapedPanelID = querystring.escape(panelID)
    return `${panelsFolder}/${escapedPanelID}`
}

const createValuesFolderLocation = (panelID: PanelID) => {
    return `${createSpecificPanelFodler(panelID)}/values`
}

export default {
    Panels: panelsFolder,
    createSchemeHashLocation(panelID: PanelID){ 
        return `${createSpecificPanelFodler(panelID)}/scheme-hash` 
    },
    createValuesFolderLocation,
    createValuesFileLocation(panelID: PanelID, uniquePanelFieldID: UniquePanelFieldID){
        const escapedValueFileName = querystring.escape(uniquePanelFieldID)
        return `${createValuesFolderLocation(panelID)}/${escapedValueFileName}` 
    },
    createSchemeLocation(panelID: PanelID){
        return `${createSpecificPanelFodler(panelID)}/scheme.json`
    }
}