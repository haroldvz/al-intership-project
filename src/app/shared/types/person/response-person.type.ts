import { PersonDescriptor } from "./detail-person.type";


export class ResponsePeopleDescriptor {

    public page: number;
    public pages: number;
    public total_pages: number;
    public total_results: number;
    public results: PersonDescriptor[] = [];

    /**
     *
     *
     * @static
     * @param {*} rawData
     * @returns
     * @memberof ResponsePeopleDescriptor
     */
    public static import(rawData: any) {

        let response: ResponsePeopleDescriptor = new ResponsePeopleDescriptor();

        response.page = rawData.hasOwnProperty('page') ? rawData.page : 0;
        response.pages = rawData.hasOwnProperty('pages') ? rawData.pages : 0;
        response.total_pages = rawData.hasOwnProperty('total_pages') ? rawData.total_pages : 0;
        response.total_results = rawData.hasOwnProperty('total_results') ? rawData.total_results : 0;

        let movie: PersonDescriptor;
        if (rawData.hasOwnProperty("results")) {
            for (var i = 0; i < rawData.results.length; i++) {
                let row: any = rawData.results[i];
                movie = PersonDescriptor.import(row);
                response.results.push(movie);
            }
        }
        return response;
    }
}