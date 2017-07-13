import {Router, Request, Response, NextFunction} from 'express';
import { FlightController } from './../controller/flightController'
const ctrl = new FlightController();

export class FlightRouter {
  router: Router
  controller: FlightController;

  constructor() {
    this.controller = ctrl;
    this.router = Router();
    this.init();
  }

  init() {
      this.router.get('/add', this.controller.AddAllFlightsToMongoDB);
      this.router.get('/', this.controller.getAllFlights);
    // this.router.get('/:id', this.controller.getById);
  }

}

export default new FlightRouter().router;
