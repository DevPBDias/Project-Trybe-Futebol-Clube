import { Request, Response } from 'express';
// import UserModel from '../models/UsersModel';
import MatchService from '../services/matchService';

class MatchController {
  constructor(private _service = new MatchService()) {}

  public async createMatch(req: Request, res: Response) {
    const match = req.body;
    const { authorization } = req.headers;

    const user = await this._service.verifyToken(authorization as string) as UserModel;
    if (!user) { res.status(401).json({ message: 'Invalid token' }); }

    const createdMatch = await this._service.createMatch(match);

    return res.status(201).json(createdMatch);
  }

  public async getMatches(_req: Request, res: Response) {
    const matches = await this._service.getMatches();

    return res.status(200).json(matches);
  }

  //   public async getMatchesInProgress(req: Request, res: Response) {
  //     const { inProgress } = req.query as { inProgress: string };
  //     if (!inProgress) {
  //       return res.status(401).json({ message: 'No query inProgress' });
  //     }
  //     const converting = JSON.parse(inProgress);
  //     const matches = await this._service.getMatchesInProgress(converting);
  //     return res.status(200).json(matches);
  //   }

//   public async getMatchesNotInProgress(_req: Request, res: Response) {
//     const matches = await this._service.getMatches();
//     let inNotProgressMatches;
//     if (matches) {
//       const filterMatches = matches.filter((match) => match.inProgress === false);
//       inNotProgressMatches = filterMatches;
//       return res.status(200).json(inNotProgressMatches);
//     }
//     return res.status(401).json({ message: 'No "notInProgress Matches"' });
//   }
}

export default MatchController;
