import { Request, Response } from 'express';
import TeamService from '../services/teamService';

class TeamController {
  constructor(private _service = new TeamService()) {}

  public async getTeams(_req: Request, res: Response) {
    const teams = await this._service.getTeams();

    return res.status(200).json(teams);
  }
}

export default TeamController;
