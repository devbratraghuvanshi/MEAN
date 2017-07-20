import {Router, Request, Response, NextFunction} from 'express';
import IndexController from './../controller/IndexController'
import flightRouter from './flightRouter';
import airportRouter from './airportRouter';

export class IndexRouter {
  router: Router

  /**
   * Initialize the indexRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('', IndexController.get); // it will get hit only if ng App is not working and Api is working
    this.router.use('/api/v1/flight', flightRouter);
    this.router.use('/api/v1/airports', airportRouter);
    this.router.get('/*', IndexController.redirectToIndex);
  }

}
// Create the HeroRouter, and export its configured Express.Router
export default new IndexRouter().router;
