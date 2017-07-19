import * as WebRequest from 'web-request';


export class YtApi {

    // public async doSearch(search: String) {
    //    const result = await WebRequest.get('http://yuvatrip.com/SearchResults?f=' + search);
    // }

    public async getResrult(search: String) {
      //  this.doSearch(search);
        const baseUrl = 'http://yuvatrip.com/webservices/b2c/flightapi.asmx/Search'
        const query = 'FlightSearchCriteria="' + search + '"';
        const res = await WebRequest.json<any>(baseUrl + '?' + query, { headers: { 'content-type': 'application/json' } });
     // console.log(res);
        return JSON.parse(res.d);
    }

}

export default YtApi;
