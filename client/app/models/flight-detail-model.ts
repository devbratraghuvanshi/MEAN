import { Fare } from './fare-model';
import { Flight } from './flight-model';

 export class FlightDetail {
        ResultIndex: string;
        AirlineRemarks: string;
        IsRefundable: string;
        IsLCC: boolean;
        OutB: Flight;
        Baggage: string;
        CabinBaggage: string;
        NoOfSeatAvailable: string;
        Meal:  string;
        InB: Flight;
        PublishedFare: number;
        OfferedFare: number;
        PayableFare: number;
        Cashback: number;
        TDS: number;
        ClientMarkup: number;
        FareBreakdown: Fare[];
        TripInd: number;
        PK: number;
 }
