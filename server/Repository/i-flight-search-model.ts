import { mongoose } from './../dbConfig/db';

// This IFlightModel now can be passed as a type argument for Mongoose's model function
export interface IFlightSearchModel extends  mongoose.Document {

}
