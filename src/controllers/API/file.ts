import express from 'express'
import { checkUserAuthenticated } from '../../middlewares'
import { upload, uploadFile } from '../../util'
const router = express.Router();
router.use(checkUserAuthenticated)
router.post("/uploadFile", upload.single("file"), (req, res) => {
    uploadFile(req).then(_id => {
        res.status(200).send({
            _id
        })
    }).catch((err: Error) => {
        res.status(500).end(err.message)
    })
})
export default router;