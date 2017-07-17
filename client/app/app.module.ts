
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SearchResultsComponent } from './components/search-results-component';
import { FlightDetailComponent } from './components/flight-detail.component';
import { SearchFlightFormComponent } from './components/search-flight-form-component';


import { FlightService } from './services/flight.service';
import { AppComponent } from './components/app.component';



@NgModule({
  declarations: [
    AppComponent,
    FlightDetailComponent,
    SearchResultsComponent,
    SearchFlightFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
  redirectTo: '/search',
  pathMatch: 'full'
      },
  {
    path: 'search',
    component: SearchFlightFormComponent
  },
    {
    path: 'results/:searchString',
    component: SearchResultsComponent
  }
])
  ],
exports: [
    RouterModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
