import express from 'express';
import multer from 'multer';
import { uploadContacts } from '../controllers/uploadController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), uploadContacts);

export default router;
