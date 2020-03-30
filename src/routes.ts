import { Router } from 'express';

const routes = Router();

import CrawlerController from './app/controllers/CrawlerController';

routes.get('/verifySite', CrawlerController.verifySite);

export default routes;
