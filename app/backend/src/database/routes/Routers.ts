import { Router, Request, Response } from 'express';
import LoginController from '../controllers/loginController';

const routers: Router = Router();

const loginController = new LoginController();
routers.post('/login', (req: Request, res: Response) => loginController.getToken(req, res));

export default routers;
