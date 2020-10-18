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
    trainingModel: {
        type: mongoose.Types.ObjectId,
        required: false
    },
    status: {
        type: Number,
        required: true,
        enum: [0, 1, 2] //0 pendiente, 1 error, 2 ok 
    },
    samples: [{
        type: mongoose.Types.ObjectId,
        required: false,
        default: null
    }]

})

export interface IActivationWord extends Document {
    idAccount: mongoose.Types.ObjectId;
    name: String;
    trainingModel: mongoose.Types.ObjectId;
    status: Number;
    samples: mongoose.Types.ObjectId[];
}

export default mongoose.model<IActivationWord>('activationWords', ActivationWordSchema)
