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
 * @param {mongoose.Types.ObjectId} [idAccount] _id de la cuenta 
 * @param {mongoose.Types.ObjectId} [idActivationWord] _id de la palabra de activacion de la solicitud
 * @param {String} [source] El sitio de la solicitud
 * @param {Date} [date] La fecha de la solicitud de informacion
 * @param {Number} [status] El estatus de la solicitud  
 */
export async function createIdentificationRequest(data: IdentificationRequestData) {
    try{        
        return await new IdentificationRequestModel(data).save();
    }catch(error){
        console.log(error);
        throw {status:"Error", code: 500, description:"Error al insertar la solicitud de identificacion"}
    }
}
/**
 * Esta funcion actualiza
 * @function updateIdentificationRequest
 * @param {mongoose.Types.ObjectId} [_id] _id de la solicitud de identification
 * @param {IdentificationRequestData} [data] datos a actualizar 
 */
export async function updateIdentificationRequest(_id: mongoose.Types.ObjectId, data: IdentificationRequestData){
    try{
        return await IdentificationRequestModel.updateOne(_id, {$set:{data}});
    }catch(error){
        console.log(error);
        throw {status:"Error", code: 500, description:"Error al actualizar la solicitud de identificacion"}
    }
}
/**
 * Esta funcion elimina
 * @function updateIdentificationRequest
 * @param {mongoose.Types.ObjectId} [_id] _id de la solicitud de identification 
 */
export async function deleteIdentificationRequest(_id: mongoose.Types.ObjectId){
    try{
        return await IdentificationRequestModel.deleteOne(_id);
    }catch(error){
        console.log(error);
        throw {status:"Error", code: 500, description:"Error al actualizar la solicitud de identificacion"}
    }
}
export interface IdentificationRequestData{
    idAccount: String;
    idActivationWord: String;
    date: Date;
    source: String;
    status: Number;
};