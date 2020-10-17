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
    PUBLIC_KEY: {
        type: String,
        required: true,
    },
    SECRET_KEY: {
        type: String,
        required: true
    }
})

export interface IClient extends Document {
    username: String;
    password: String;
    name: String;
    PUBLIC_KEY: String;
    SECRET_KEY: String;
}

export default mongoose.model<IClient>('clients', ClientSchema)
