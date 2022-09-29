// import UserModel from '../models/UsersModel';

// const JWT_SECRET = 'JWT_SECRET';

// export async function loginService(email: string) {
  //   const token = sign({ email }, JWT_SECRET);
  //   console.log(token);
  
  //   const data = await UserModel.findOne({ where: { email } });
  //   console.log(data);
  //   if (!data) return null;
  
  //   return token;
  // }
  
  // export default { loginService };
import { sign } from 'jsonwebtoken';
import UserModel from '../models/UsersModel';
import HttpException from '../shared/HttpException';

const JWT_SECRET = 'JWT_SECRET';

class loginService {
  private _userModel = UserModel;

  public async getUserEmail(email:string) {
    const user = await this._userModel.findOne({ where: { email } });
    if (!user) {
      throw new HttpException(404, 'Email not found');
    }

    const token = sign({ email }, JWT_SECRET);
    return token;
  }
}

export default loginService;
