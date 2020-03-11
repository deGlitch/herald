import mongoose from 'mongoose';
import ApiKey, { IApiKey } from '../packages/model/ApiKey';
import crypto from 'crypto';
import fs from 'fs';

const main = async () => {
    const connectionString = "mongodb://localhost:27017/dev-command-pod"
    await mongoose.connect(connectionString, { useNewUrlParser: true })
    console.log('connected to mongoose')
    const newKey = crypto.createHash('md5').update(Buffer.from(new Date().toString())).digest('hex');

    console.log('new key is ' + newKey)
    await ApiKey(mongoose).create({
        key: newKey,
        name: "test key",
        projectId: "okie dokie",
        scope: []
    })

    console.log(`writing new key - ${newKey}`)
    fs.appendFileSync('api-keys-list.txt', newKey + '\n');
}

main()