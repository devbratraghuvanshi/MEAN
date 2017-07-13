import { Component, OnInit } from '@angular/core';
import { FlightService } from './../services/flight.service';
import { FlightSearch } from './../models/flight-search-model';

@Component({
    selector: 'search-results',
    templateUrl: './../templates/search-results.component.html'
    //  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

    flightSearch: FlightSearch;
    // flightDetail: FlightDetail;

    constructor(private flightService: FlightService) {
        // this.flightDetail = this.flightService.Search().Results[0];
    }

    ngOnInit(): void {
        this.getSerchResults();
    }
    getSerchResults(): void {
        this.flightService.search().then(fsSarch => this.flightSearch = fsSarch)
        .catch(error => console.log(error));
    }
}
