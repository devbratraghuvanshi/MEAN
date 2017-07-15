import * as WebRequest from 'web-request';


export class YtApi {

    // use this only one time to add all movies to MongoDb from MoviesData folder
    public async doSearch() {
        const result = await WebRequest.get('http://yuvatrip.com/SearchResults?f=1-1-1-0-0-2-,Delhi_DEL_IN_Mumbai_BOM_IN_07252017');
        // console.log(result.content);
        return this.getResrult();
    }

    public async getResrult() {
        const baseUrl = 'http://yuvatrip.com/webservices/b2c/flightapi.asmx/Search'
        const query = 'FlightSearchCriteria=%221-1-1-0-0-2-%2CDelhi_DEL_IN_Mumbai_BOM_IN_07252017%22';
        const res = await WebRequest.json<any>(baseUrl + '?' + query, { headers: { 'content-type': 'application/json' } });
        console.log(res);
        return JSON.parse(res.d);
    }

}

export default YtApi;
