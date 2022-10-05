import { compareSync } from 'bcryptjs';
import { Request, Response } from 'express';
import { sign, SignOptions } from 'jsonwebtoken';
import User from '../models/UsersModel';
import LoginService from '../services/loginService';

const JWT_SECRET = process.env.JWT_SECRET || 'JWT_SECRET';
const JWT_OPTIONS: SignOptions = {
  expiresIn: '6d',
  algorithm: 'HS256',
};

const MESSAGE = 'Incorrect email or password';

class loginController {
  constructor(private _service = new LoginService()) {}

  public async loginToken(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await this._service.login(email);
    if (!user) {
      return res.status(401).json({ message: MESSAGE });
    }

    const compare = compareSync(password, user.password);
    if (!compare) {
      return res.status(401).json({ message: MESSAGE });
    }

    const token = sign({ email }, JWT_SECRET, JWT_OPTIONS);
    return res.status(200).json({ token });
  }

  public async AuthToken(req: Request, res: Response) {
    const { authorization } = req.headers;
    if (!authorization) { res.status(401).json({ message: MESSAGE }); }

    const user = await this._service.verifyToken(authorization as string) as User;
    if (!user) { res.status(401).json({ message: MESSAGE }); }

    return res.status(200).json({ role: user.role });
  }
}

export default loginController;
