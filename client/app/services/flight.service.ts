import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { FlightSearch } from './../models/flight-search-model';

@Injectable()
export class FlightService {

    private baseUrl = 'http://localhost:3000/api/v1/flight/search/api';

    constructor(private http: Http) { }

    searchDb(): Promise<FlightSearch> {
        return this.http.get(this.baseUrl).toPromise()
            .then(res => res.json()[0] as FlightSearch)
            .catch(this.handleError);
    };
    searchApi(): Promise<FlightSearch> {
        return this.http.get(this.baseUrl).toPromise()
            .then(res => res.json() as FlightSearch)
            .catch(this.handleError);
    };

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
