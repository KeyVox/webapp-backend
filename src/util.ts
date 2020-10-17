import jwt from 'jwt-simple'
import misc from './config/misc'
export interface Payload {
    _id: string;
    time: number;
    KEY: string;
}

export function createToken(id: string, KEY: string): string {
    let payload: Payload = {
        _id: id,
        time: Date.now(),
        KEY: KEY
    }
    return jwt.encode(payload, misc.SECRET_KEY);
}

export function recoverInformation(token: string): Payload {
    return jwt.decode(token, misc.SECRET_KEY);
}