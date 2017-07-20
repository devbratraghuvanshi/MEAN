import { Router, Request, Response, NextFunction } from 'express';
import { Airport } from '../Repository/flight-search-repository';

export class AirportController {


  // use this only one time to add all airport to MongoDb from Data folder
public AddAllAirportsToMongoDB(req: Request, res: Response, next: NextFunction) {
   // drop old collection from Mongo db
    Airport.collection.drop();
    // read data from Data folder and add to collection in mongo db
    const airports = require('./../dataFile/airport-data.json');
    Airport.collection.insert(airports);
    res.send('airports data added');
  }

  public async getAirports(req: Request, res: Response, next: NextFunction) {
    Airport.find((error, airportList) => {
      if (error) {
        res.status(500);
        res.send('internal server error');
      } else {
        res.status(200);
        res.send(airportList);
      }
    });
  }

}

export default AirportController;
