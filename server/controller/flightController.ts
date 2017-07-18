import { Router, Request, Response, NextFunction } from 'express';
import { FlightSearch } from '../Repository/flight-search-repository';
import { YtApi } from './ytapi';


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

    public async getAllFlightsDB(req: Request, res: Response, next: NextFunction) {
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
  /**
   * GET all movies.
   */
  public async getAllFlightsApi(req: Request, res: Response, next: NextFunction) {
   const search = req.params.searchStr;
    const api = new YtApi();
    res.send( await api.getResrult(search));
    // FlightSearch.find((error, flights) => {
    //   if (error) {
    //     res.status(500);
    //     res.send('internal server error');
    //   } else {
    //     res.status(200);
    //     res.send(flights);
    //   }
    // });
  }

}

export default FlightController;
