import { Request, Response } from 'express';
import Match from '../models/MatchesModel';
import MatchService from '../services/matchService';

class MatchController {
  constructor(private _service = new MatchService()) {}

  public async createMatch(req: Request, res: Response) {
    const match = req.body as Match;
    const createdMatch = await this._service.createMatch(match);

    return res.status(201).json(createdMatch);
  }

  public async getMatches(_req: Request, res: Response) {
    const matches = await this._service.getMatches();

    return res.status(200).json(matches);
  }

  public async updateMatch(req: Request, res: Response) {
    const { id } = req.params;
    const updateMatch = await this._service.updateMatch(Number(id));
    if (!updateMatch) {
      return res.status(401).json({ message: 'Match is not finished' });
    }

    return res.status(201).json({ message: 'Finished' });
  }
}

export default MatchController;
