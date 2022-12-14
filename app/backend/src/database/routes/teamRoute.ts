import { Router } from 'express';
import TeamController from '../controllers/teamController';

const route = Router();

const teamController = new TeamController();

route.get(
  '/',
  (req, res) => teamController.getTeams(req, res),
);

route.get(
  '/:id',
  (req, res) => teamController.getOneTeam(req, res),
);

export default route;
