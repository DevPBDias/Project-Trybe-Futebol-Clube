import { sign } from 'jsonwebtoken';
import UserModel from '../models/UsersModel';

const JWT_SECRET = 'JWT_SECRET';

class LoginService {
  constructor(private userModel = UserModel) { }

  public async login(email: string) {
    const user = await this.userModel.findOne({ where: { email } });
    if (!user) return null;
    const token = sign({ email }, JWT_SECRET);
    return token;
  }
}

export default LoginService;
