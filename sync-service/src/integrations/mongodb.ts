import mongoose, { Mongoose } from 'mongoose';

export const MongoDB = {
    async connect(connectionString: string) : Promise<Mongoose> {
        return await mongoose.connect(connectionString, { useNewUrlParser: true })
    }
}