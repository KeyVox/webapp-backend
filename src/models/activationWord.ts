import mongoose, { Schema, Document } from 'mongoose'

const ActivationWordSchema: Schema = new Schema({
    idAccount: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    NN: {
        type: mongoose.Types.ObjectId,
        required: false
    },
    status: {
        type: Number,
        required: true,
        enum: [0, 1, 2] //0 pendiente, 1 error, 2 ok 
    }

})

export interface ICall extends Document {
    idAccount: mongoose.Types.ObjectId;
    name: String;
    NN: mongoose.Types.ObjectId;
    status: Number;
}

export default mongoose.model<ICall>('activationWords', ActivationWordSchema)
