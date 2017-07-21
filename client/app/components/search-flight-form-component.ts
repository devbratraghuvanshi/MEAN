

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';

import { SearchFlight } from './../models/search-flight';
import * as Moment from 'moment';
import { Router } from '@angular/router';





@Component({
    selector: 'search-flight-form',
    templateUrl: './../templates/search-flight-form.component.html'
})

export class SearchFlightFormComponent {

    isDomestic: boolean;
    tripType;
    origin: any;
    destiantion: any;
    dDate: any;
    rDate: any;
    adult: Number;
    child: Number;
    infant: Number;
    cabinClass: Number;

    constructor(private router: Router, public http: Http ) {
        this.tripType = '1';
        this.adult = 1;
        this.child = 0;
        this.infant = 0;
        this.cabinClass = 2;
        this.dDate = new Date(); // Moment(new Date()).format('DD/MM/YYYY');
        this.rDate = new Date(); // Moment(new Date()).format('DD/MM/YYYY');

    }

   observableSource = (keyword: any): Observable<any[]> => {
    if (keyword) {
      return this.http.get('http://localhost:3000/api/v1/airports/' + keyword)
        .map(res => {
          return res.json();
        })
    } else {
      return Observable.of([]);
    }
  }

    set depDateInput(e) {
        if (e !== '') {
            this.dDate = Moment(e, Moment.ISO_8601).toDate();
        } else {
            this.dDate = null;
        }
    }
    get depDateInput() {
        if (this.dDate == null) {
            return '';
        }
        return Moment(this.dDate).format().substring(0, 10);
    }
    set retDateInput(e) {
        if (e !== '') {
            this.rDate = Moment(e, Moment.ISO_8601).toDate();
        } else {
            this.rDate = null;
        }
    }
    get retDateInput() {
        if (this.rDate == null) {
            return '';
        }
        return Moment(this.rDate).format().substring(0, 10);
    }

    onSubmit(search) {
    console.log(search)

     let originCode =   search.origin.label + search.origin.Country + '';
        originCode =  originCode.replace(' [ ', '_').replace(' ]', '_') ;

    let destCode =   search.destination.label + search.destination.Country + '';
        destCode =  destCode.replace(' [ ', '_').replace(' ]', '_') ;

    let serchStr = '1-' + search.journeyType;
        serchStr = serchStr + '-' + search.adult + '-' + search.child + '-' + search.infants ;
        serchStr = serchStr  + '-' + search.cabinClass + '-,';
        serchStr = serchStr + originCode + '_' + destCode + '_' + Moment(new Date(search.departure)).format('MMDDYYYY');
    this.router.navigate(['/results/' + serchStr ]);
    }

}


