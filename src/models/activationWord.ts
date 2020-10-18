import mongoose, { Schema, Document } from 'mongoose'

const ActivationWordSchema: Schema = new Schema({
    idAccount: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref:'accounts'
    },
    name: {
        type: String,
        required: true
    },
    trainingModel: {
        type: mongoose.Types.ObjectId,
        required: false,
        default: null,
        ref:'files'
    },
    status: {
        type: Number,
        required: false,
        enum: [0, 1, 2], //0 pendiente, 1 error, 2 ok
        default: 0
    },
    samples: [{
        type: mongoose.Types.ObjectId,
        required: true,
        ref:'files'
    }]

})

export interface IActivationWord extends Document {
    idAccount: mongoose.Types.ObjectId;
    name: String;
    trainingModel: mongoose.Types.ObjectId | null;
    status: Number;
    samples: mongoose.Types.ObjectId[];
}

export default mongoose.model<IActivationWord>('activationWords', ActivationWordSchema)
