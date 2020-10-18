
import mongoose, { Schema, Document, Types } from 'mongoose'

const FileSchema: Schema = new Schema({

    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    value: {
        type: Schema.Types.Mixed,
        required: true
    }
})

export interface IFiles extends Document {
    name: String;
    desc: String;
    value: { [key: string]: any }
}

export default mongoose.model<IFiles>('files', FileSchema)
