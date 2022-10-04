import { Request, Response } from 'express';
// import UserModel from '../models/UsersModel';
import MatchService from '../services/matchService';

class MatchController {
  constructor(private _service = new MatchService()) {}

  //   public async createMatch(req: Request, res: Response) {
  //     const match = req.body;
  //     const { authorization } = req.headers;

  //     const user = await this._service.verifyToken(authorization as string) as UserModel;
  //     if (!user) { res.status(401).json({ message: 'Invalid token' }); }

  //     const createdMatch = await this._service.createMatch(match);

  //     return res.status(201).json(createdMatch);
  //   }

  public async getMatches(_req: Request, res: Response) {
    const matches = await this._service.getMatches();

    return res.status(200).json(matches);
  }
}

export default MatchController;
