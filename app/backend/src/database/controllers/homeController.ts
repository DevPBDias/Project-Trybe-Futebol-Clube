import { Request, Response } from 'express';
import HomeLeaderboardService from '../services/homeService';

class HomeBoardController {
  constructor(private _service = new HomeLeaderboardService()) {}

  public async getHomeBoard(_req: Request, res: Response) {
    const cardBoard = (await this._service.homeBoard());
    if (!cardBoard) {
      return res.status(404).json({ message: 'no homeBoard' });
    }
    return res.status(200).json(cardBoard);
  }
}

export default HomeBoardController;
