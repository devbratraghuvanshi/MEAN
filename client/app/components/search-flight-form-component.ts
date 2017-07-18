import { Component } from '@angular/core';
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
    origin: String;
    destiantion: String;
    dDate: any;
    rDate: any;
    adult: Number;
    child: Number;
    infant: Number;
    cabinClass: Number;

    constructor(private router: Router ) {
        this.tripType = 'OneWay';
        this.adult = 1;
        this.child = 0;
        this.infant = 0;
        this.cabinClass = 2;
        this.dDate = new Date(); // Moment(new Date()).format('DD/MM/YYYY');
        this.rDate = new Date(); // Moment(new Date()).format('DD/MM/YYYY');

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
    let serchStr = '1-1-' + search.adult + '-' + search.child + '-' + search.infants + '-' + search.cabinClass + '-,';
    serchStr = serchStr + 'Delhi_DEL_IN_Mumbai_BOM_IN_' + Moment(new Date(search.departure)).format('MMDDYYYY');
    this.router.navigate(['/results/' + serchStr ]);
    }

}


