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
import { getAccountById } from '../../lib/accountData'
import { createIdentificationRequest } from '../../lib/identificationRequestData';
import {getRandomActivationWordByAccount} from '../../lib/activationWordData';
import identificationRequest from '../../models/identificationRequest';
import {IdentificationRequestData} from '../../lib/identificationRequestData';
import activationWord from '../../models/activationWord';
import { createCall } from '../../models/call';
const app: express.Application = express();

app.post('/requestCall',(req: Request,resp: Response)=>{
	/*
		Aqui se realiza una validación de los parametros iniciales
	*/
	let type = req.body.type;
	let idAccount = req.body.idAccount;		
	let status = 0;
	getAccountById(idAccount).then(account=>{
		if(account){
			let phone = account.phoneNumber;			
			let idAccount = account._id;
			getRandomActivationWordByAccount(idAccount).then(activationWords=>{
				if(activationWords!=null && activationWords.length>0){					
					createIdentificationRequest({idAccount, idActivationWord:activationWords[0]._id, source:req.body.source, date: new Date(), status: 0}).then(identificationRequest=>{
						if(identificationRequest != null){
							createCall({idAccount, idIdentificationRequest:identificationRequest._id, status:0, dateInitiated: new Date(), dateTerminated: new Date()}).then(call=>{
								if(call){
									resp.send({status:"Ok",call});
								}else{
									resp.status(501).end({status:"Error",code:501,description:"No se inserto la llamada"});
								}
							}).catch(errorCall=>{
								resp.status(errorCall.code).end(errorCall);
							});
						}else{
							resp.status(501).end({status:"Error",code:501,description:"No se inserto la solicitud de identificacion"});
						}
					}).catch(errorIdentificationRequest=>{
						resp.status(errorIdentificationRequest.code).end(errorIdentificationRequest);
					});				
				}else{
					resp.status(404).end({status:"Error",code:404,description:"No se encontro ninguna huella de voz"});
				}				
			}).catch(errorActivationWord=>{
				resp.status(500).end(errorActivationWord);
			});			
		}else{
			resp.status(404).end({status:"Error",code:404,description:"No se encontro ninguna cuenta"});
		}
	}).catch(errorObtenerAccount=>{
		resp.status(errorObtenerAccount.code).end(errorObtenerAccount);
	});
});
