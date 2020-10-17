import { Mongoose } from 'mongoose';
/**
 * @author René Payán Téllez
 * @email payantellez1g@hotmail.com
 * @create date 2020-10-17 05:24am
 * @modify date 2020-10-17 03:55am
 * @desc [Este archivo tiene todas las funciones relacionadas al modelo del almacenado de peticiones de enroll en la base de datos]
*/
import IdentificationRequestModel,{IIdentificationRequest} from '../models/identificationRequest';
import mongoose from 'mongoose'
/**
 * Esta funcion busca y retorna retorna una llamada por su _id
 * @function getIdentificationRequestById
 * @param {String} [_id] _id de la solicitud de identificacion a buscar  
 * @return {ICall | null} Objeto de tipo "IIdentificationRequest" si se encontro en la base, en cualquier otro caso NULL    
*/
export async function getIdentificationRequestById(_id: String): Promise< IIdentificationRequest | null > {
    try{
        return await IdentificationRequestModel.findOne({_id});
    }catch(error){
        throw {status:"Error", code:500, description:"Error al conectar a la base de datos"};
    }
}

/**
 * Esta funcion crea una solicitud de identificacion, desde sus parametros
 * @function createIdentificationRequest
 * @param {mongoose.Types.ObjectId} [idClient] _id del cliente
 * @param {Number} [type] El tipo de la identification request (0 enroll, 1 identification)
 * @param {mongoose.Types.ObjectId} [idActivationWord] _id de la palabra de activacion de la solicitud
 * @param {Date} [date] La fecha de la solicitud de informacion
 * @param {Number} [status] El estatus de la solicitud
 * @param {String | null} [site] El sitio de la solicitud
 * @return {IIdentificationRequest  | null } Objeto de tipo "IIdentificationRequest" con el objeto insertado o nulo en caso de no insertarse
 */
export async function createIdentificationRequest(idClient: mongoose.Types.ObjectId, type: Number, idActivationWord: mongoose.Types.ObjectId, date: Date, status: Number, site:String | null) {
    try{
        return await new IdentificationRequestModel({
            idClient,
            type,
            idActivationWord,
            date, 
            status, 
            site
        }).save();
    }catch(error){
        throw {status:"Error", code: 500, description:"Error al insertar la solicitud de identificacion"}
    }
}