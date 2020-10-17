import mongoose, { Schema, Document } from 'mongoose'

const ClientSchema: Schema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    Nombre: {
        type: String,
        required: true,
    },
    fileId: {
        type: mongoose.Types.ObjectId,
        required: false
    }
})

export interface IClient extends Document {
    _id: String;
    Nombre: String;
    fileID: String;
}

export default mongoose.model<IClient>('clients', ClientSchema)
