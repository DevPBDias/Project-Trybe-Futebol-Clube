// import { NextFunction, Request, Response } from 'express';
// import { verify } from 'jsonwebtoken';
// import User from '../models/UsersModel';

// const JWT_SECRET = process.env.JWT_SECRET || 'JWT_SECRET';
// const MESSAGE = 'Incorrect email or password';

// const validationToken = async (req: Request, res: Response, next: NextFunction) => {
//   const { authorization } = req.headers;
//   if (!authorization) { return res.status(401).json({ message: MESSAGE }); }

//   const { email } = verify(authorization as string, JWT_SECRET) as User;
//   const user = await User.findOne({ where: { email } });
//   if (!user || !email) { return res.status(401).json({ message: 'User not found' }); }

//   return res.status(401).json({ message: 'Expired or invalid token' });
//   next();
// };

// export default validationToken;
