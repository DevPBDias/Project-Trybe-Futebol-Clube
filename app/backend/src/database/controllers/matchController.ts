import { Request, Response } from 'express';
import Match from '../models/MatchesModel';
import MatchService from '../services/matchService';

class MatchController {
  constructor(private _service = new MatchService()) {}

  public async createMatch(req: Request, res: Response) {
    const match = req.body as Match;
    const createdMatch = await this._service.createMatch(match);
    if (!createdMatch) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }

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

    return res.status(200).json({ message: 'Finished' });
  }

  public async updateResult(req: Request, res: Response) {
    const { id } = req.params;
    const { awayTeamGoals, homeTeamGoals } = req.body;

    const newResult = await this._service.updateResult(Number(id), homeTeamGoals, awayTeamGoals);
    if (!newResult) {
      return res.status(401).json({ message: 'Match is not finished' });
    }

    return res.status(200).json({ message: 'Result altered' });
  }
}

export default MatchController;
