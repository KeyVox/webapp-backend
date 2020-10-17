/**
 * @author René Payán Téllez
 * @email payantellez1g@hotmail.com
 * @create date 2020-10-17 2:50am
 * @modify date 2020-10-17 03:55am
 * @desc [Este archivo tiene todas las funciones relacionadas al controlador de las llamadas en la base de datos]
*/
import express, { Request, Response } from 'express'
import { json } from 'body-parser'
import mongoose from 'mongoose'
import {getCallById} from '../../lib/callData'
const app: express.Application = express();

app.post('/requestCall',(req: Request,resp: Response)=>{
	/*
		Aqui se realiza una validación de los parametros iniciales
	*/

	/*getCallById(req.body.id).then(r=>{
		resp.status(200).end();
	}).catch(err=>{
		resp.status(err.code).end(err);
	});*/
});
