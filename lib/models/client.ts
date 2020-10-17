import mongoose, { Schema, Document } from 'mongoose'

const ClientSchema: Schema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    Nombre: {
        type: String,
        required: true,
    }
})

export interface IClient extends Document {
    _id: String;
    password: String;
}

export default mongoose.model<IClient>('clients', ClientSchema)
