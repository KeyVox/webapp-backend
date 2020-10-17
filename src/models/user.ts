import mongoose, { Schema, Document } from 'mongoose'

const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    PUBLIC_KEY: {
        type: String,
        required: true,
    },
    SECRET_KEY: {
        type: String,
        required: true
    }
})

export interface IUser extends Document {
    username: String;
    password: String;
    API_KEY: String;
}

export default mongoose.model<IUser>('users', UserSchema)
