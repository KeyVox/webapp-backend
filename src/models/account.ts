import mongoose, { Schema, Document } from 'mongoose'

const AccountSchema: Schema = new Schema({    
    idAccount: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    idPhoto: {
        type: mongoose.Types.ObjectId,
        required: false,
        default: null
    },
    name: {
        type: String,
        required: true,
    },    
    phoneNumber: {
        type: String,
        required: true
    }
})

export interface IAccount extends Document {
    idAccount: mongoose.Types.ObjectId;
    idPhoto: mongoose.Types.ObjectId | null;
    name: String;
    phoneNumber: String;
}

export default mongoose.model<IAccount>('accounts', AccountSchema)
