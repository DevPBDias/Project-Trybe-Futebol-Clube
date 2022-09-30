import { Router } from 'express';
import LoginController from '../controllers/loginController';

const route = Router();

const loginController = new LoginController();

route.post('/', (req, res) => loginController.loginToken(req, res));

export default route;
