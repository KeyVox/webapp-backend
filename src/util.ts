import jwt from 'jwt-simple'
import misc from './config/misc'
import database from './config/database'
import mongoose from 'mongoose'
import multer from 'multer'
import fs from 'fs'
import FileModel from './models/files'
import { Request } from 'express'
import path from 'path'
import mime from 'mime'

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname)
    }
})
export let upload = multer({ storage: storage });

export async function uploadFile(req: Request) {
    const conn = mongoose.createConnection(`mongodb:${database.user}:${database.password}@${database.IP}:${database.port}/?authSource=${database.name}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    let obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: mime.getType(path.join(__dirname + '/uploads/' + req.file.filename)),
            ext: mime.getExtension(path.join(__dirname + '/uploads/' + req.file.filename))
        }
    }
    return (await new FileModel(obj).save())._id
}
/**
 * Interfaz usada para la conversion de informacion a token 
 * @interface Payload 
 * 
 * @property {string} _id ID del cliente
 * @property {number} time Tiempo en unix
 * @property {string} KEY PUBLIC_KEY o PRIVATE_KEY 
 */
export interface Payload {
    _id: String;
    time: number;
    KEY: String;
}

/**
 * Function to convert the information into a token
 * @function createToken
 * 
 * @param {string} id ID del cliente
 * @param {string} KEY PUBLIC_KEY o SECRET_KEY
 * 
 * @returns {string} Token web para las peticiones
 */
export function createToken(id: String, KEY: String): String {
    let payload: Payload = {
        _id: id,
        time: Date.now(),
        KEY: KEY
    }
    return jwt.encode(payload, misc.SECRET_KEY);
}

/**
 * 
 * @function recoverInformation
 * 
 * @param {string} token Token web para las peticiones
 * 
 * @returns {Payload} Un elemento de interfaz Payload
 */
export function recoverInformation(token: string): Payload {
    return jwt.decode(token, misc.SECRET_KEY);
}