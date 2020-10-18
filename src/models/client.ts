import mongoose, { Schema, Document } from 'mongoose'

const ClientSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    publicKey: {
        type: String,
        required: true,
    },
    secretKey: {
        type: String,
        required: true
    }
})

export interface IClient extends Document {
    username: String;
    password: String;
    name: String;
    publicKey: String;
    secretKey: String;
}

export default mongoose.model<IClient>('clients', ClientSchema)
