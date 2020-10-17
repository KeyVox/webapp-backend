import mongoose, { Schema, Document } from 'mongoose'

const ActivationWord: Schema = new Schema({
    idClient: {
        type: mongoose.Types.ObjectId,
        required: true,
    },

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
