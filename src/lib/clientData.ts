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
 * @return {ICall | null} Retorna una promesa de la busqueda en la base de datos
 */
export async function getClientById(_id: String) {
	try {
		return await ClientModel.findOne({ _id });
	} catch (error) {
		console.log(error);
		throw {
			status: 'Error',
			code: 500,
			description: 'Error al conectar a la base de datos',
		};
	}
}

export async function createClient(data: ClientData) {
	try {
		return await new ClientModel(data).save();
	} catch (err) {
		console.log(err);
		throw {
			status: 'Error',
			code: 500,
			description: 'Error al ejecutar la consulta',
		};
	}
}
export async function updateClient(_id: String, data: ClientData) {
	try {
		const client = await ClientModel.findOne({ _id });
		if (client) {
			client.username = data.username;
			client.name = data.name;
			client.password = data.password;
			return await client.save();
		}
		return null;
	} catch (err) {
		console.log(err);
		throw {
			status: 'Error',
			code: 500,
			description: 'Error al ejecutar la consulta',
		};
	}
}

export async function deleteClient(_id: String) {
	try {
		return await ClientModel.deleteOne({ _id });
	} catch (err) {
		console.log(err);
		throw {
			status: 'Error',
			code: 500,
			description: 'Error al ejecutar la consulta',
		};
	}
}
export interface ClientData {
	username: String;
	password: String;
	name: String;
	publicKey: String;
	secretKey: string;
}