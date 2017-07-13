import { FlightBookingPage } from './app.po';

describe('flight-booking App', () => {
  let page: FlightBookingPage;

  beforeEach(() => {
    page = new FlightBookingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
