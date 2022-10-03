import { Request, Response } from 'express';
import LoginService from '../services/loginService';

const MESSAGE = 'Incorrect email or password';

class loginController {
  constructor(private _service = new LoginService()) {}

  public async loginToken(req: Request, res: Response) {
    const { email } = req.body;

    const token = await this._service.login(email);
    if (token === null) {
      return res.status(401).json({ message: MESSAGE });
    }
    return res.status(200).json({ token });
  }
}

export default loginController;
