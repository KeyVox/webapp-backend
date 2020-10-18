/**
 * @author René Payán Téllez
 * @email payantellez1g@hotmail.com
 * @create date 2020-10-17 03:00am
 * @modify date 2020-10-17 03:55am
 * @desc [Este archivo tiene todas las funciones relacionadas al modelo de las llamadas en la base de datos]
*/
import ClientModel, { IClient } from '../models/client';
/**
 * Esta funcion busca y retorna retorna un cliente por su _id
 * @param {String} [_id] _id de la llamada a buscar  
 * @return {ICall | null} Objeto de tipo "IClient" si se encontro en la base, en cualquier otro caso NULL
*/
export async function getClientById(_id: String): Promise<IClient | null> {
    try {
        return await ClientModel.findOne({ _id });
    } catch (error) {
        throw { status: "Error", code: 500, description: "Error al conectar a la base de datos" };
    }
}