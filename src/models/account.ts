import mongoose, { Schema, Document } from 'mongoose'

const AccountSchema: Schema = new Schema({    
    idAccount: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref:'accounts'        
    },
    idPhoto: {
        type: mongoose.Types.ObjectId,
        required: false,
        default: null,
        ref:'files'
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
