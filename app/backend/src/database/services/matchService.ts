import MatchModel from '../models/MatchesModel';
import Team from '../models/TeamsModel';

class MatchService {
  constructor(private matchModel = MatchModel) {
  }

  public async createMatch(match: MatchModel) {
    const result = await this.matchModel.create(match);
    return result;
  }

  public async getMatches() {
    const result = await this.matchModel.findAll({
      include: [{ model: Team,
        as: 'teamHome',
        attributes: { exclude: ['id'] },
      }, { model: Team,
        as: 'teamAway',
        attributes: { exclude: ['id'] },
      }],
    });
    if (!result) return null;

    return result;
  }

  public async getMatchesInProgress(inProgress: boolean) {
    const result = await this.matchModel.findAll({ where: { inProgress },
      include: [{ model: Team,
        as: 'teamHome',
        attributes: { exclude: ['id'] },
      }, { model: Team,
        as: 'teamAway',
        attributes: { exclude: ['id'] },
      }],
    });
    if (!result) return null;
    return result;
  }

  public async updateMatch(id: number) {
    const result = await this.matchModel.update({ inProgress: false }, { where: { id } });
    if (!result) return null;
    return result;
  }
}

export default MatchService;
