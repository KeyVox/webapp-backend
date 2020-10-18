import IdentificationRequestModel from '../../models/identificationRequest'
import express from 'express'
import { checkUserAuthenticated } from '../../middlewares'

const router = express.Router()
interface IdentificationRequestData {
    idAccount: String;
    idActivationAccount: String;
    source: String;
    date: Date;
    status: Number;
}

router.use(checkUserAuthenticated)
router.post("/addIdentificationRequest", (req, res) => {
    try {
        let doc = req.body as IdentificationRequestData
        (new IdentificationRequestModel(doc)).save().then(newDoc => {
            res.status(200).send(newDoc)
        }).catch((err: Error) => {
            res.status(500).send(err.message)
        })
    }
    catch (err) {
        res.status(500).send(err)
    }
})

router.post("/getStatusIdentificationRequest", (req, res) => {
    try {
        let id = req.body.id;
        IdentificationRequestModel.findById(id).then(doc => {
            if (doc)
                res.status(200).send({ status: doc.status })
            else
                res.status(200).send({ status: -1 })
        }).catch((err: Error) => {

        })
    }
    catch (err) {

    }
})

export default router;