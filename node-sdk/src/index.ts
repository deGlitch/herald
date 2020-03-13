import * as yaml from 'yaml';
import * as fs from 'fs';
import { CommandPostFile } from '../../packages/src/interfaces'
import * as validator from '../../packages/src/validate';

const main = async () => {
    const fileContent = fs.readFileSync('../example/config1.yml').toString()
    let parsedYaml = yaml.parse(fileContent) ;
    const { value, error } = validator.validateConfigSchemeObject<CommandPostFile>(parsedYaml) 
    if(error){
        console.log(`config file is invalid - ${error.message}`)
        return
    }
    
    console.log(`config valid is valid`)
}

main()