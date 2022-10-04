import { Router } from 'express';
import LoginController from '../controllers/loginController';
import ValidateLogin from '../middlewares/ValidateLogin';

const route = Router();

const loginController = new LoginController();

route.post(
  '/',
  ValidateLogin.validateEmail,
  ValidateLogin.validatePassword,
  (req, res) => loginController.loginToken(req, res),
);

route.get(
  '/validate',
  (req, res) => loginController.AuthToken(req, res),
);

export default route;
