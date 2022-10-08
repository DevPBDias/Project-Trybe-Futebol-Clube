import { Router } from 'express';
import HomeBoardController from '../controllers/homeController';

const route = Router();

const homeBoardController = new HomeBoardController();

route.get(
  '/',
  (req, res) => homeBoardController.getHomeBoard(req, res),
);

route.get(
  '/home',
  (req, res) => homeBoardController.getHomeBoard(req, res),
);

route.get(
  '/away',
  (req, res) => homeBoardController.getHomeBoard(req, res),
);

export default route;
