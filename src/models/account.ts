import mongoose, { Schema, Document } from 'mongoose'

const AccountSchema: Schema = new Schema({    
    idClient: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref:'clients'        
    },
    accountNumber:{
        type: String,
        required: true        
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
    _id: mongoose.Types.ObjectId;
    idClient: mongoose.Types.ObjectId;
    accountNumber: String;
    idPhoto: mongoose.Types.ObjectId | null;
    name: String;
    phoneNumber: String;
}

export default mongoose.model<IAccount>('accounts', AccountSchema)
