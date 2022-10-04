import { verify } from 'jsonwebtoken';
import { IEmail } from '../interfaces/Login.interfaces';
import MatchModel from '../models/MatchesModel';
import Team from '../models/TeamsModel';
import UserModel from '../models/UsersModel';

const JWT_SECRET = process.env.JWT_SECRET || 'JWT_SECRET';

class MatchService {
  constructor(private matchModel = MatchModel, private userModel = UserModel) {
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

  public async verifyToken(authorization:string) {
    const { email } = verify(authorization, JWT_SECRET) as IEmail;
    const user = await this.userModel.findOne({ where: { email } });
    return user;
  }
}

export default MatchService;
