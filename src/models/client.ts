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
    API_KEY: String;
    name: String;
}

export default mongoose.model<IClient>('clients', ClientSchema)
