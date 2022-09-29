import { sign } from 'jsonwebtoken';
import UserModel from '../models/UsersModel';

const JWT_SECRET = 'JWT_SECRET';

export async function loginService(email: string) {
  const token = sign({ email }, JWT_SECRET);
  console.log(token);

  const data = await UserModel.findOne({ where: { email } });
  console.log(data);
  if (!data) return null;

  return token;
}

export default { loginService };
