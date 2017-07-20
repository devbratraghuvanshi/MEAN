import {Router, Request, Response, NextFunction} from 'express';
import { AirportController } from './../controller/airportController'
const ctrl = new AirportController();

export class AirportRouter {
  router: Router
  controller: AirportController;

  constructor() {
    this.controller = ctrl;
    this.router = Router();
    this.init();
  }

  init() {
    this.router.get('/', this.controller.getAirports);
    this.router.get('/addtodb', this.controller.AddAllAirportsToMongoDB);
    //this.router.get('/:id', this.controller.getAirportById);
  }

}

export default new AirportRouter().router;
