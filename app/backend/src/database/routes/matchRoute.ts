import { Router } from 'express';
import MatchController from '../controllers/matchController';

const route = Router();

const matchController = new MatchController();

// route.post(
//   '/',
//   (req, res) => matchController.createMatch(req, res),
// );

route.get(
  '/',
  (req, res) => matchController.getMatches(req, res),
);

export default route;
