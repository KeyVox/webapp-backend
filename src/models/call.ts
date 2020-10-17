import mongoose, { Schema, Document } from 'mongoose'

const CallSchema: Schema = new Schema({
    idClient: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    identificationRequest: {
        type: mongoose.Types.ObjectId,
        required: false
    },
    enrollRequest: {
        type: mongoose.Types.ObjectId,
        required: false
    },
    type:{
        type: Number,
        required: true,
        enum: [0,1]
    },
    status: {
        type: Number,
        required: true,
        enum: [0, 1, 2, 3]
    },
    phoneNumber: {
        type: String,
        required: true
    },
    dateInitiated: {
        type: Date,
        required: true,
        default: Date.now
    },
    dateTerminated: {
        type: Date,
        required: false
    }
})

export interface ICall extends Document {
    idClient: mongoose.Types.ObjectId;
    status: Number;
    phoneNumber: String;
    dateInitiated: Date;
    dateTerminated: Date;
    identificationRequest: mongoose.Types.ObjectId;
    enrollRequest: mongoose.Types.ObjectId;
}

export default mongoose.model<ICall>('calls', CallSchema)
