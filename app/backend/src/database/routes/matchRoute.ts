import { Router } from 'express';
import MatchController from '../controllers/matchController';
import ValidateMatches from '../middlewares/ValidateMatches';

const route = Router();

const matchController = new MatchController();

route.post(
  '/',
  ValidateMatches.validateMatch,
  ValidateMatches.validateTeam,
  (req, res) => matchController.createMatch(req, res),
);

route.get(
  '/',
  (req, res) => matchController.getMatches(req, res),
);

// route.get(
//   '/?inProgress=true',
//   (req, res) => matchController.getMatchesInProgress(req, res),
// );

// route.get(
//   '/?inProgress=false',
//   (req, res) => matchController.getMatchesNotInProgress(req, res),
// );

export default route;
