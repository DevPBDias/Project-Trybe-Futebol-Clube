import { Router } from 'express';
import MatchController from '../controllers/matchController';
import ValidateMatches from '../middlewares/ValidateMatches';
import validateToken from '../middlewares/ValidateToken';

const route = Router();

const matchController = new MatchController();

route.post(
  '/',
  validateToken,
  ValidateMatches.validateMatch,
  ValidateMatches.validateTeam,
  (req, res) => matchController.createMatch(req, res),
);

route.get(
  '/',
  (req, res) => matchController.getMatches(req, res),
);

route.patch(
  '/:id/finish',
  validateToken,
  (req, res) => matchController.updateMatch(req, res),
);

route.patch(
  '/:id',
  (req, res) => matchController.updateResult(req, res),
);

export default route;
