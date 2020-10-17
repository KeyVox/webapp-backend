import mongoose, { Schema, Document } from 'mongoose'

const IdentificationRequestSchema: Schema = new Schema({
    idClient: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    type:{
        type: Number,
        required: true,
        enum: [0,1]
    },
    idActivationWord: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    date:{
        type: Number,
        required: true,
        enum: [0,1]
    },
    status: {
        type: Number,
        required: true,
        enum: [0, 1, 2, 3]
    }, 
    site: {
        type: String,
        required: false
    }
})

export interface IIdentificationRequest extends Document {
    idClient: mongoose.Types.ObjectId;
    date: Date;
    status: Number;
    type: Number;
    idActivationWord: mongoose.Types.ObjectId;
    site: String;
}

export default mongoose.model<IIdentificationRequest>('identificationRequests', IdentificationRequestSchema)
