import { FlightDetail } from './flight-detail-model';

 export class FlightSearch {
    _id: string;
    TotalResult: string;
    JourneyType: string;
    Source: string;
    IsDomestic: string;
    TraceId: string;
    Results: FlightDetail[]
    MultiDestination: boolean;
    DesinationNames: string[];
    OBFlights: any;
    IBFlights: any;
    OBMinFare: number;
    OBMaxFare: number;
    IBMinFare: number;
    IBMaxFare: number;
    Error: string;
 }

