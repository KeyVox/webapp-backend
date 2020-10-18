import mongoose, { Schema, Document } from 'mongoose'

const IdentificationRequestSchema: Schema = new Schema({
    idAccount: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref:'account'
    },
    idActivationWord: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref:'activationWords'
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
    idAccount: mongoose.Types.ObjectId;
    idActivationWord: mongoose.Types.ObjectId;
    source: String;
    date: Date;
    status: Number;
}

export default mongoose.model<IIdentificationRequest>('identificationRequests', IdentificationRequestSchema)
