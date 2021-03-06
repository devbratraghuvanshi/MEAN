import { mongoose } from './../dbConfig/db';
import { IFlightSearchModel } from './i-flight-search-model';

export let flightSchema = new mongoose.Schema({}, { collection: 'FlightSearchCollection' });
export let FlightSearch = mongoose.model<IFlightSearchModel>('FlightSearch', flightSchema);

export let AirportSchema = new mongoose.Schema({}, { collection: 'AirportList' });
export let Airport = mongoose.model<any>('AirportList', AirportSchema);
