import AccountModel from '../models/account';

import { Types } from 'mongoose';

export interface AccountData {
	idAccount: string;
	name: string;
	fileID: string | null;
	phoneNumber: string;
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
		const account = await getAccountById(_id);
		if (account) {
			account.name = data.name;
			account.idAccount = Types.ObjectId(data.idAccount);
			account.fileID = data.fileID
		}
		return null;
	} catch (err) {
		console.log(err);
		throw {
			status: 'Error',
			code: 500,
			description: 'Error al realizar la consulta',
		};
	}
}
