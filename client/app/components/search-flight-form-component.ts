import { Component } from '@angular/core';
import { SearchFlight } from './../models/search-flight';
import * as Moment from 'moment';


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

    constructor( ) {
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
    }

}


