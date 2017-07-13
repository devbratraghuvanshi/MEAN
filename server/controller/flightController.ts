import { Router, Request, Response, NextFunction } from 'express';
import { FlightSearch } from '../Repository/flight-search-repository';



export class FlightController {

  // use this only one time to add all movies to MongoDb from MoviesData folder
public AddAllFlightsToMongoDB(req: Request, res: Response, next: NextFunction) {
   // drop old collection from Mongo db
    FlightSearch.collection.drop();
    // read data from MoviesData folder and add to collection in mongo db
    const flights = require('./../dataFile/search-ressult-data.json');
    FlightSearch.collection.insert(flights);
    res.send('data added');
  }
  /**
   * GET all movies.
   */
  public getAllFlights(req: Request, res: Response, next: NextFunction) {

    FlightSearch.find((error, flights) => {
      if (error) {
        res.status(500);
        res.send('internal server error');
      } else {
        res.status(200);
        res.send(flights);
      }
    });
  }

}

export default FlightController;
