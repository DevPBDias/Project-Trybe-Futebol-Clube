import TeamsModel from '../models/TeamsModel';

class teamService {
  constructor(private teamsModel = TeamsModel) { }

  public async getTeams() {
    const teams = await this.teamsModel.findAll();
    if (!teams) return null;

    return teams;
  }
}

export default teamService;
