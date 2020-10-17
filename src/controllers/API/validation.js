import express, { Request, Response } from 'express'
import { json } from 'body-parser'
import mongoose from 'mongoose'
const app: express.Application = express();


app.get('/getStatus',(req,resp)=>{
	let id = req.body.id;
	
});
