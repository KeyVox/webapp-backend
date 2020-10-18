import express, { Request, Response } from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import { upload, uploadFile } from '../../util';

import account from './account';
import activationWord from './activationWord';
import call from './call';
import file from './file'
import identificationRequest from './identificationRequest'
import validation from './validation'

const router = express.Router();

router.use('/account', account)
router.use('/activationWord', activationWord)
router.use('/call', call)
router.use('/file', file)
router.use('/identificationRequest', identificationRequest)
router.use('/validation', validation)

export default router;
