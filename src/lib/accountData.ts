import AccountModel from '../models/account';

import { Types } from 'mongoose';

export interface AccountData {
	idAccount: Types.ObjectId;
    idPhoto: Types.ObjectId | null;
    name: String;
    phoneNumber: String;
}

export async function getAccountById(_id: string) {
	try {
		return await AccountModel.findOne({ _id });
	} catch (err) {
		console.log(err);
		throw {
			status: 'Error',
			code: 500,
			description: 'Error al realizar la consulta',
		};
	}
}

export async function getAccountByIdAccount(idAccount: string) {
	try {
		return await AccountModel.findOne({ idAccount });
	} catch (err) {
		console.log(err);
		throw {
			status: 'Error',
			code: 500,
			description: 'Error al realizar la consulta',
		};
	}
}

export async function createAccount(data: AccountData) {
	try {
		return await new AccountModel(data).save();
	} catch (err) {
		console.log(err);
		throw {
			status: 'Error',
			code: 500,
			description: 'Error al realizar la consulta',
		};
	}
}

export async function updateAccount(_id: string, data: AccountData) {
	try {
		return await getAccountById(_id);		
	} catch (err) {
		console.log(err);
		throw {
			status: 'Error',
			code: 500,
			description: 'Error al realizar la consulta',
		};
	}
}

export async function deleteAccount(_id: string) {
	try {
		return await AccountModel.deleteOne({ _id });
	} catch (err) {
		console.log(err);
		throw {
			status: 'Error',
			code: 500,
			description: 'Error al realizar la consulta',
		};
	}
}
