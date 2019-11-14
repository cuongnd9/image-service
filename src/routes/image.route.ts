import express from 'express';
import withController from '../helpers/withController';
import ImageController from '../controllers/image.controller';

const ctr = new ImageController();

const router = express.Router();

router.post('/upload-single', withController(ctr.uploadSingle));

export default router;
