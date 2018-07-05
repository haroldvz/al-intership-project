import { TVSeriesDescriptor } from "./detail-tv.type";


export class ResponseTVSeriesDescriptor {

    public page: number;
    public total_pages: number;
    public total_results: number;
    public results: TVSeriesDescriptor[] = [];

    /**
     *
     *
     * @static
     * @param {*} rawData
     * @returns
     * @memberof ResponseTVSeriesDescriptor
     */
    public static import(rawData: any) {

        let response: ResponseTVSeriesDescriptor = new ResponseTVSeriesDescriptor();

        response.page = rawData.hasOwnProperty('page') ? rawData.page : 0;
        response.total_pages = rawData.hasOwnProperty('total_pages') ? rawData.total_pages : 0;
        response.total_results = rawData.hasOwnProperty('total_results') ? rawData.total_results : 0;

        let tv_serie: TVSeriesDescriptor;
        if (rawData.hasOwnProperty("results")) {
            for (var i = 0; i < rawData.results.length; i++) {
                let row: any = rawData.results[i];
                tv_serie = TVSeriesDescriptor.import(row);
                response.results.push(tv_serie);
            }
        }
        return response;
    }
}