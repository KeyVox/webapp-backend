import IdentificationRequestModel from '../../models/identificationRequest'
import { IActivationWord } from '../../models/activationWord'
import FileModel from '../../models/files'
import express from 'express'
import { checkUserAuthenticated } from '../../middlewares'
import { upload, uploadFile } from '../../util'
import identificationRequest from '../../models/identificationRequest'
const router = express.Router()
interface IdentificationRequestData {
    idAccount: String;
    idActivationAccount: String;
    source: String;
    date: Date;
    status: Number;
    idRecording: String;
}

router.use(checkUserAuthenticated)
router.post("/verifyIdentity", upload.single("record"), async (req, res) => {
    try {
        let idFile = await uploadFile(req)
        identificationRequest.findByIdAndUpdate(req.body.id, {
            $set: {
                idRecording: idFile
            }
        }).then(identRequest => {
            res.status(200).send({
                value: identRequest
            })
        }).catch((err: Error) => {
            res.status(200).end(err.message)
        })

    }
    catch (err) {
        res.status(200).end(err)
    }
})

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
            res.status(500).end(err.message)
        })
    }
    catch (err) {
        res.status(500).end(err)
    }
})

export default router;