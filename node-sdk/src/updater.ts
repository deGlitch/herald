import axios from 'axios';
import * as Config from './config';
import { PanelDescriptor } from '../../packages/interfaces';


const sendUpdate = async (apiKey: String, panelDescriptor: PanelDescriptor) => {
    await axios.headers()
}