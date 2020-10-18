import express from 'express';
import ClientModel, { IClient } from '../../models/client';
import { checkUserNotAuthenticated } from '../../middlewares';
import { Payload, createToken } from '../../util';
const router = express.Router();

router.post('/login', checkUserNotAuthenticated, async (req, res) => {
	try {
		let doc: IClient | null;
		doc = null;
		if (req.body.username && req.body.password) {
			doc = await ClientModel.findOne({
				username: req.body.username,
				password: req.body.password,
			});
			if (doc) {
				res.status(200).send({
					token: createToken(doc._id, doc.secretKey),
				});
			} else {
				res.status(404).end('No se pudo autenticar');
			}
		} else {
			if (req.body.publicKey) {
				doc = await ClientModel.findOne({
					publicKey: req.body.publicKey,
				});
				if (doc) {
					res.status(200).send({
						token: createToken(doc._id, doc.publicKey),
					});
				} else {
					res.status(404).end('No se pudo autenticar');
				}
			} else if (req.body.privateKey) {
				doc = await ClientModel.findOne({
					privateKey: req.body.privateKey,
				});
				if (doc) {
					res.status(200).send({
						token: createToken(doc._id, doc.secretKey),
					});
				} else {
					res.status(404).end('No se pudo autenticar');
				}
			}
		}
		if (!doc) {
			res.status(500).end(
				'No se recibio ningun valor para obtener el token'
			);
		}
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

/**
 * idValidationRequest
 * Record
 *
 */
export default router;
