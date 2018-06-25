import { MovieDescriptor } from "./movies/detail-movie.type";

export class ResponseDescriptor {

    public page: number;
    public pages: number;
    public total_pages: number;
    public total_results: number;
    public results: MovieDescriptor[] = [];

    /**
     *
     *
     * @static
     * @param {*} rawData
     * @returns
     * @memberof ResponseDescriptor
     */
    public static import(rawData: any) {

        let response: ResponseDescriptor = new ResponseDescriptor();

        response.page = rawData.hasOwnProperty('page') ? rawData.page : 0;
        response.pages = rawData.hasOwnProperty('pages') ? rawData.pages : 0;
        response.total_pages = rawData.hasOwnProperty('total_pages') ? rawData.total_pages : 0;
        response.total_results = rawData.hasOwnProperty('total_results') ? rawData.total_results : 0;

        let movie: MovieDescriptor;
        if (rawData.hasOwnProperty("results")) {
            for (var i = 0; i < rawData.results.length; i++) {
                let row: any = rawData.results[i];
                movie = MovieDescriptor.import(row);
                response.results.push(movie);
            }
        }
        return response;
    }
}