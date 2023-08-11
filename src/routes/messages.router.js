import express from 'express';
import { retrieveMessages, saveMessage } from '../controllers/messages.controller.js';

const router = express.Router();

router.get('/', retrieveMessages);
router.post('/', saveMessage);

export default router;