import { Document, Schema, model, Mongoose } from 'mongoose';
import ms from 'ms';

export interface IApiKey extends Document {
    key: String,
    name: String,
    projectId: String,
    expiration: Date,
    scope: [String]
}

const ApiKeyScheme : Schema = new Schema({
    key: { type: String, index: true },
    name: { type: String, index: true },
    projectId: { type: String, index: true },
    expiration: { type: Date, default: Date.now() + ms('365d') },
    scope: [String]
})

export default (mongoose : Mongoose) => mongoose.model<IApiKey>("api-key", ApiKeyScheme);