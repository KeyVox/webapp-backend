import mongoose, { Schema, Document } from 'mongoose'

const CallSchema: Schema = new Schema({
    idAccount: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    idIdentificationRequest: {
        type: mongoose.Types.ObjectId,
        required: false,
        default: null
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
    idIdentificationRequest: mongoose.Types.ObjectId;
    status: Number;
    dateInitiated: Date;
    dateTerminated: Date;
}

export default mongoose.model<ICall>('calls', CallSchema)
