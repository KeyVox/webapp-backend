import mongoose, { Schema, Document } from 'mongoose'
import { IActivationWord } from './activationWord'
import { IAccount } from './account'
const IdentificationRequestSchema: Schema = new Schema({
    idAccount: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'account'
    },
    idActivationWord: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'activationWords'
    },
    source: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: Number,
        required: true,
        enum: [0, 1, 2] //0 Pendiente, 1 error, 2 ok
    }
})

export interface IIdentificationRequest extends Document {
    idAccount: mongoose.Types.ObjectId | IAccount;
    idActivationWord: mongoose.Types.ObjectId | IActivationWord;
    source: String;
    date: Date;
    status: Number;
}

export default mongoose.model<IIdentificationRequest>('identificationRequests', IdentificationRequestSchema)
