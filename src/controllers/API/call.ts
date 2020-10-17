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
import {getClientById} from '../../lib/clientData'
import {createIdentificationRequest} from '../../lib/identificationRequestData'
import {getActivationWordById} from '../../lib/activationWordData'
const app: express.Application = express();

app.post('/requestCall',(req: Request,resp: Response)=>{
	/*
		Aqui se realiza una validación de los parametros iniciales
	*/
	let type = req.body.type;
	let idClient = req.body.idClient;		
	let status = 0;
	getClientById(idClient).then(cliente=>{
		if(cliente != null){
			let dateInitiated = new Date();
			let dateTerminated = new Date();
			let phoneNumber = cliente.phoneNumber;
			let site = null;	
			let idActivationWord = null;	
			if(type == 0){			
				idActivationWord = ;
			}else{			
				site = req.body.site;	
				idActivationWord = ;
			}
			createIdentificationRequest(idClient, type, idActivationWord, new Date(), 0, site).then(enrollRequest=>{

			}).catch(errorEnroll=>{

			});
		}else{
			resp.status(404).end({status:"Error",code:404,description:"El cliente no fue encontrado"});
		}
	}).catch(errorObtenerCliente=>{

	});    

    
	if(type  == 0){

	}else if (type == 1){
		let site = req.body.site;
	}
	



	/*getCallById(req.body.id).then(r=>{
		resp.status(200).end();
	}).catch(err=>{
		resp.status(err.code).end(err);
	});*/
});
