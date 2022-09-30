import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import LoginService from '../services/loginService';

class loginController {
  constructor(private _service = new LoginService()) {}

  public async loginToken(req: Request, res: Response) {
    const { email, password } = req.body;

    const token = await this._service.login(email);
    if (!email || !password) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'All fields must be filled' });
    }

    return res.status(StatusCodes.OK).json({ token });
  }
}

export default loginController;
