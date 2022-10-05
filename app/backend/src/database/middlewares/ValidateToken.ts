import { NextFunction, Request, Response } from 'express';
import { decode } from 'jsonwebtoken';
import { IEmail } from '../interfaces/Login.interfaces';
import userModel from '../models/UsersModel';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  const decoded = decode(authorization as string);
  if (!decoded) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  console.log(decoded);
  const { email } = decoded as IEmail;
  const user = await userModel.findOne({ where: { email }, raw: true });
  if (!user) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  next();
};

export default validateToken;
