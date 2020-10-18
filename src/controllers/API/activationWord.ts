import ActivatioWordModel from '../../models/activationWord';
import express from 'express';
import { checkUserAuthenticated } from '../../middlewares';
const router = express.Router();
router.use(checkUserAuthenticated);
router.post('/getActivationWordsByAccount', (req, res) => {
	try {
		ActivatioWordModel.find({
			idAccount: req.body.idAccount,
		})
			.then((values) => {
				res.status(200).send({ value: values });
			})
			.catch((err: Error) => {
				res.status(500).end(err.message);
			});
	} catch (err) {
		res.status(500).send(err);
	}
});

router.post('/addActivationWord', (req, res) => {
	try {
		const activationWord = new ActivatioWordModel({
			...req.body,
			trainingModel: null,
			status: 0,
		} as ActivatioWordData);
		activationWord.save().then((doc) => {
			res.status(200).send({ value: doc });
		});
	} catch (err) {
		res.status(500).send(err);
	}
});
interface ActivatioWordData {
	idAccount: String;
	name: String;
	trainingModel: String;
	status: Number;
	samples: Array<String>;
}
export default router;
