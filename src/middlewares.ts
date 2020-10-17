import { Request, Response, NextFunction, Handler } from 'express'
import { recoverInformation, Payload } from './util'
/**
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function checkUserAuthenticated(req: Request, res: Response, next: NextFunction) {
    try {
        let token = req.headers.authorization as string;
        let payload = recoverInformation(token);
        if (((Date.now() - payload.time) / 1000) > 3600) {
            res.status(403).end("Token expirado")
        }
        else {
            next();
        }
    } catch (err) {
        res.status(400).end("Token invalido")
    }
}

export function checkUserNotAuthenticated(req: Request, res: Response, next: NextFunction) {
    try {
        let token = req.headers.authorization as string;
        let payload = recoverInformation(token);
        if (((Date.now() - payload.time) / 1000) > 3600) {
            next();
        }
        else {
            res.status(403).end("Token sin expirar")
        }
    } catch (err) {
        next()
    }
}
