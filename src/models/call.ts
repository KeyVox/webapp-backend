import mongoose, { Schema, Document } from 'mongoose'
import account from './account'

const CallSchema: Schema = new Schema({
    idAccount: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref:'accounts'
    },
    idIdentificationRequest: {
        type: mongoose.Types.ObjectId,
        required: false,
        default: null,
        ref:'identificationRequests'
    },
    status: {
        type: Number,
        required: true,
        default: 0
    },
    dateInitiated: {
        type: Date,
        required: true,
        default: Date.now
    },
    dateTerminated: {
        type: Date,
        required: false,
        default: null
    }
})

export interface ICall extends Document {
    idAccount: mongoose.Types.ObjectId;
    idIdentificationRequest: mongoose.Types.ObjectId | null;
    status: Number;
    dateInitiated: Date;
    dateTerminated: Date | null;
}

export default mongoose.model<ICall>('calls', CallSchema)
