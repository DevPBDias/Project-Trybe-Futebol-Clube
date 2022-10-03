import { Request, Response } from 'express';
import TeamService from '../services/teamService';

class TeamController {
  constructor(private _service = new TeamService()) {}

  public async getTeams(_req: Request, res: Response) {
    const teams = await this._service.getTeams();

    return res.status(200).json(teams);
  }

  public async getOneTeam(req: Request, res: Response) {
    const { id } = req.params;
    const team = await this._service.getOneTeam(Number(id));

    return res.status(200).json(team);
  }
}

export default TeamController;
