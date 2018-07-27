import { SearchDescriptor } from "./search.type";


export class ResponseSearchDescriptor {

    public page: number;
    public total_pages: number;
    public total_results: number;
    public results: SearchDescriptor[] = [];

    /**
     *
     *
     * @static
     * @param {*} rawData
     * @returns
     * @memberof ResponseSearchDescriptor
     */
    public static import(rawData: any) {

        let response: ResponseSearchDescriptor = new ResponseSearchDescriptor();

        response.page = rawData.hasOwnProperty('page') ? rawData.page : 0;
        response.total_pages = rawData.hasOwnProperty('total_pages') ? rawData.total_pages : 0;
        response.total_results = rawData.hasOwnProperty('total_results') ? rawData.total_results : 0;

        let res: SearchDescriptor;
        if (rawData.hasOwnProperty("results")) {
            for (var i = 0; i < rawData.results.length; i++) {
                let row: any = rawData.results[i];
                res = SearchDescriptor.import(row);
                response.results.push(res);
            }
        }
        return response;
    }
}