import IdentificationRequestModel from '../../models/identificationRequest'
import { IActivationWord } from '../../models/activationWord'
import FileModel from '../../models/files'
import express from 'express'
import { checkUserAuthenticated } from '../../middlewares'
import { upload } from '../../util'
const router = express.Router()
interface IdentificationRequestData {
    idAccount: String;
    idActivationAccount: String;
    source: String;
    date: Date;
    status: Number;
}

router.use(checkUserAuthenticated)
router.post("/verifyIdentity", upload.single("record"), (req, res) => {
    IdentificationRequestModel.findById(req.body.id).populate("idActivationWord").then(IdenDoc => {
        if (IdenDoc) {
            let idHotWord = (IdenDoc.idActivationWord as IActivationWord)._id;
            FileModel.findById(idHotWord).then(docFile => {

            }).catch((errFile: Error) => {

            })
        }
        else {

        }
    }).catch((errIde: Error) => {

    })
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