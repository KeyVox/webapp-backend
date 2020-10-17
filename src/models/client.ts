import mongoose, { Schema, Document } from 'mongoose'

const ClientSchema: Schema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    fileID: {
        type: mongoose.Types.ObjectId,
        required: false
    },
    phoneNumber: {
        type: String,
        required:true
    }
})

export interface IClient extends Document {
    _id: String;
    name: String;
    fileID: String;
    phoneNumber: String;
}

export default mongoose.model<IClient>('clients', ClientSchema)
