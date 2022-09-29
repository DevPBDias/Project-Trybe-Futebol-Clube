// import { Request, Response } from 'express';
// import { loginService } from '../services/loginService';

// async function loginController(req: Request, res: Response) {
  //   const user = req.body;
  //   const token = await loginService(user.email);
  
  //   if (!token) {
    //     return res.status(StatusCodes.NOT_FOUND).json({ message: 'No token created' });
    //   }
    
    //   return res.status(StatusCodes.OK).json({ token });
    // }
    
    // export default { loginController };
    
import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import LoginService from '../services/loginService';

class loginController {
  constructor(private _service = new LoginService) {}

  public async getToken(req: Request, res: Response) {
    const { email } = req.body;

    const token = await this._service.getUserEmail(email);
    return res.status(StatusCodes.OK).json(token);
  }
}

export default loginController;
