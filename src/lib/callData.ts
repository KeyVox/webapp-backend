/**
 * @author René Payán Téllez
 * @email payantellez1g@hotmail.com
 * @create date 2020-10-17 03:00am
 * @modify date 2020-10-17 03:55am
 * @desc [Este archivo tiene todas las funciones relacionadas al modelo de las llamadas en la base de datos]
*/
import CallModel,{ICall} from '../models/call';
import  mongoose from 'mongoose'
/**
 * Esta funcion busca y retorna retorna una llamada por su _id
 * @param {String} [_id] _id de la llamada a buscar  
 * @return {ICall | null} Objeto de tipo "Call" si se encontro en la base, en cualquier otro caso NULL    
*/
export async function getCallById(_id: String): Promise< ICall | null > {
    try{
        return await CallModel.findOne(_id);
    }catch(error){
        throw {status:"Error", code:500, description:"Error al conectar a la base de datos"};
    }
}
export async function createCall(data: CallData):Promise < ICall | null>{
    try{
        return await new CallModel(data).save();
    }catch(error){
        throw {status:"Error", code:500, description:"Error al conectar a la base de datos"};
    }
}

export interface CallData{
    idAccount: mongoose.Types.ObjectId;
    idIdentificationRequest: mongoose.Types.ObjectId | null;
    status: Number;
    dateInitiated: Date;
    dateTerminated: Date | null;
}
