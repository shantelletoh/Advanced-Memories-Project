import express from 'express';

import {signin, signup} from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signin); // send form details to backend
router.post('/signup', signup); // send form details to backend

export default router;