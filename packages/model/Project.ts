import { Document, Mongoose } from 'mongoose';
import { BaseProject } from '../interfaces';

interface IProject extends Document, BaseProject {
    members: [String],
    panelIdArray: [String]
}

export default (mongoose : Mongoose) => mongoose.model<IProject>('Project', new mongoose.Schema({
    name: { type: String, index: true },
    members: [String],
    panelIdArray: [String]
}))