import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { loginService } from '../services/loginService';

async function loginController(req: Request, res: Response) {
  const user = req.body;
  const token = await loginService(user.email);

  if (!token) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'No token created' });
  }

  return res.status(StatusCodes.OK).json({ token });
}

export default { loginController };
