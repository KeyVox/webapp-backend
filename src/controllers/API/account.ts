import express from 'express'
import { getClientById } from '../../lib/clientData'
import { checkUserAuthenticated } from '../../middlewares'
import AccountModel from '../../models/account'
import { recoverInformation } from '../../util'
const router = express.Router()
router.use(checkUserAuthenticated)
interface AccountData {
    idClient: String;
    accountNumber: String;
    idPhoto: String;
    name: String;
    phoneNumber: String;
}

router.post('/addAccount', (req, res) => {
    try {        
        let doc = req.body as AccountData;
        (new AccountModel(doc)).save().then(newAccount => {
            res.status(200).send({ value: newAccount })
        }).catch((err: Error) => {
            res.status(500).end(err.message)
        })
    } catch (err) {
        res.status(500).end(err)
    }
});

router.post('/getAccountByID', (req, res) => {
    try {
        AccountModel.findById(req.body.id).then(acc => {
            res.status(200).send({ value: acc })
        }).catch((err: Error) => {
            res.status(500).end(err.message)
        })
    }
    catch (err) {
        res.status(500).end(err)
    }
})

router.post("/listAccountsByClient", (req, res) => {
    try {
        let payload = recoverInformation(req.headers.authorization as string)
        AccountModel.find({
            idClient: payload._id as string
        }).then(values => {
            res.status(200).send({ value: values })
        }).catch((err: Error) => {
            res.status(500).send(err.message)
        })
    }
    catch (err) {
        res.status(500).end(err)
    }
})


export default router