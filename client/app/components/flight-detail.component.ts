import { Component, Input } from '@angular/core';
import { Flight } from './../models/flight-model';
import { FlightDetail } from './../models/flight-detail-model';

@Component({
    selector: 'flight-detail',
    templateUrl: './../templates/flight-detail.component.html',
    styleUrls: ['./../stylesheets/flight-detail.component.css']
})
export class FlightDetailComponent {
    @Input() flightDetail: FlightDetail;
}
