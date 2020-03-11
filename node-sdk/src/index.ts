import * as yaml from 'yaml';
import * as fs from 'fs';
import { CommandPostFile } from '../../shared/interfaces'
import * as scheme from './scheme';

const main = async () => {
    const fileContent = fs.readFileSync('../example/config1.yml').toString()
    let parsedYaml = yaml.parse(fileContent) ;
    const { value, error } = scheme.validateConfigObject<CommandPostFile>(parsedYaml) 
    if(error){
        console.log(`config file is invalid - ${error.message}`)
        return
    }
    
    console.log(`config valid is valid`)
}

main()