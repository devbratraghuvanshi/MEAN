import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

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

    constructor(
        private flightService: FlightService,
        private route: ActivatedRoute,
        private location: Location
    ) {
        // this.flightDetail = this.flightService.Search().Results[0];
    }

    ngOnInit(): void {
        this.route.params.subscribe( para => {
           this.getSerchResults(para['searchString']);
        })
    }
    getSerchResults(searshStr: String): void {
        console.log(searshStr)
        // change searchDb to searchApi
        this.flightService.searchApi(searshStr).then(fsSarch => this.flightSearch = fsSarch)
        .catch(error => console.log(error));
    }

    goBack(): void {
        this.location.back();
    }
}
