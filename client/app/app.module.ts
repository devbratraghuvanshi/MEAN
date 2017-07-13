import { SearchResultsComponent } from './components/search-results-component';
import { FlightDetailComponent } from './components/flight-detail.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';
import { FlightService } from './services/flight.service';

import { AppComponent } from './components/app.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightDetailComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
