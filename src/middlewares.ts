import { Request, Response, NextFunction, Handler } from 'express';
import { recoverInformation, Payload } from './util';
/**
 * * Verifica que el usuario tenga el token o que no haya expirado
 * @function checkUserAuthenticated
 *
 * @param req Express request
 * @param res Express response
 * @param next Express next
 */
export function checkUserAuthenticated(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		let token = req.headers.authorization as string;
		let payload = recoverInformation(token);
		req.body.idClient = payload._id;
		if ((Date.now() - payload.time) / 1000 > 3600) {
			res.status(403).end('Token expirado');
		} else {
			next();
		}
	} catch (err) {
		console.log(err);
		res.status(400).end('Token invalido');
	}
}

/**
 * Verifica que el usuario no tenga el token o que haya expirado
 * @function checkUserNotAuthenticated
 *
 * @param req Express request
 * @param res Express response
 * @param next Express next
 */
export function checkUserNotAuthenticated(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		let token = req.headers.authorization as string;
		let payload = recoverInformation(token);
		if ((Date.now() - payload.time) / 1000 > 3600) {
			next();
		} else {
			res.status(403).end('Token sin expirar');
		}
	} catch (err) {
		next();
	}
}
