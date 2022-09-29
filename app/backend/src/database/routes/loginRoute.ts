import { Router } from 'express';

import login from '../controllers/loginController';

const router = Router();

router.post('/', login.loginController);

export default router;