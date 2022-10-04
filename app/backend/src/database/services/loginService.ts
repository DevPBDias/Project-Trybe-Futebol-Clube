import { verify } from 'jsonwebtoken';
import { IEmail } from '../interfaces/Login.interfaces';
import UserModel from '../models/UsersModel';

const JWT_SECRET = process.env.JWT_SECRET || 'JWT_SECRET';

class LoginService {
  constructor(private userModel = UserModel) { }

  public async login(email: string) {
    const user = await this.userModel.findOne({ where: { email } });
    if (!user) return null;
    return user;
  }

  public async verifyToken(authorization:string) {
    const { email } = verify(authorization, JWT_SECRET) as IEmail;
    const user = await this.userModel.findOne({ where: { email } });
    return user;
  }
}

export default LoginService;
