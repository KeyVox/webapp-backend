import mongoose, { Schema, Document } from 'mongoose'

const AccountSchema: Schema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    idAccount: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    idPhoto: {
        type: mongoose.Types.ObjectId,
        required: false
    },
    phoneNumber: {
        type: String,
        required: true
    }
})

export interface IAccount extends Document {
    _id: String;
    idAccount: mongoose.Types.ObjectId;
    idPhoto: mongoose.Types.ObjectId;
    fileID: String;
    phoneNumber: String;
}

export default mongoose.model<IAccount>('accounts', AccountSchema)
