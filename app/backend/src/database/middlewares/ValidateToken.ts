import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { IEmail } from '../interfaces/Login.interfaces';
import userModel from '../models/UsersModel';

const JWT_SECRET = process.env.JWT_SECRET || 'JWT_SECRET';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  const { email } = verify(authorization as string, JWT_SECRET) as unknown as IEmail;
  const user = await userModel.findOne({ where: { email } });
  if (!user) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  next();
};

export default validateToken;
