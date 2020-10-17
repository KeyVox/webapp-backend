import jwt from 'jwt-simple'
import misc from './config/misc'

/**
 * Interfaz usada para la conversion de informacion a token 
 * @interface Payload 
 * 
 * @property {string} _id ID del cliente
 * @property {number} time Tiempo en unix
 * @property {string} KEY PUBLIC_KEY o PRIVATE_KEY 
 */
export interface Payload {
    _id: string;
    time: number;
    KEY: string;
}

/**
 * Function to convert the information into a token
 * @function createToken
 * 
 * @param {string} id ID del cliente
 * @param {string} KEY PUBLIC_KEY o SECRET_KEY
 * 
 * @returns {string} Token web para las peticiones
 */
export function createToken(id: string, KEY: string): string {
    let payload: Payload = {
        _id: id,
        time: Date.now(),
        KEY: KEY
    }
    return jwt.encode(payload, misc.SECRET_KEY);
}

/**
 * 
 * @function recoverInformation
 * 
 * @param {string} token Token web para las peticiones
 * 
 * @returns {Payload} Un elemento de interfaz Payload
 */
export function recoverInformation(token: string): Payload {
    return jwt.decode(token, misc.SECRET_KEY);
}