/**
 * @author Ares Ulises Juárez Martínez
 * @email aresulises8@hotmail.com
 * @create date 2020-10-17 10:41pm
 * @modify date 2020-10-17 11:17pm
 * @desc [Este archivo tiene todas las funciones relacionadas al modelo del almacenado de peticiones de palabras de activacion en la base de datos]
*/
import ActivationWordModel, { IActivationWord } from '../models/activationWord';
import mongoose from 'mongoose';
/**
 * 
 * @param _id {mongoose.Types.ObjectId} ID de la palabra de activacion
 * 
 * 
 */
export async function getActivationWordById(_id: mongoose.Types.ObjectId): Promise<IActivationWord | null> {
    try {
        return await ActivationWordModel.findById(_id);
    } catch (error) {
        throw { status: "Error", code: 500, description: "Error al conectar a la base de datos" };
    }
}

export async function createActivationWord(data: ActivationWordData) {
    try {
        return await new ActivationWordModel(data).save();
    } catch (error) {
        throw { status: "Error", code: 500, description: "Error al insertar la solicitud de identificacion" }
    }
}

export async function getActivationWordsByIdAccount(idAccount: mongoose.Types.ObjectId) {
    try {
        return await ActivationWordModel.find(idAccount);
    } catch (error) {
        throw { status: "Error", code: 500, description: "Error al conectar a la base de datos" }
    }
}

export async function deleteActivationWord(_id: mongoose.Types.ObjectId) {
    try {
        return await ActivationWordModel.findByIdAndDelete(_id)
    } catch (error) {
        throw { status: "Error", code: 500, description: "Error al conectar a la base de datos" }
    }
}

export async function getRandomActivationWordByAccount(account: mongoose.Types.ObjectId): Promise<IActivationWord[] | null> {
    try{
        return await ActivationWordModel.aggregate([{ $match: { idAccount: account } },{$sample: { size: 1 }}, {$limit:1}]);
    }catch(error){
        throw { status: "Error", code: 500, description: "Error al conectar a la base de datos" }
    }
}
export interface ActivationWordData {
    idAccount: mongoose.Types.ObjectId;
    name: String;
    trainingModel: mongoose.Types.ObjectId;
    status: Number;
    samples: mongoose.Types.ObjectId[];
}
