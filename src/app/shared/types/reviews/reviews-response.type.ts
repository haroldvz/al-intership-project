import { ReviewDescriptor } from "./review";




export class ResponseReviewDescriptor {

    public page: number;
    public pages: number;
    public total_pages: number;
    public total_results: number;
    public results: ReviewDescriptor[] = [];

    /**
     *
     *
     * @static
     * @param {*} rawData
     * @returns
     * @memberof ResponseDescriptor
     */
    public static import(rawData: any) {

        let response: ResponseReviewDescriptor = new ResponseReviewDescriptor();

        response.page = rawData.hasOwnProperty('page') ? rawData.page : 0;
        response.pages = rawData.hasOwnProperty('pages') ? rawData.pages : 0;
        response.total_pages = rawData.hasOwnProperty('total_pages') ? rawData.total_pages : 0;
        response.total_results = rawData.hasOwnProperty('total_results') ? rawData.total_results : 0;

        let movie: ReviewDescriptor;
        if (rawData.hasOwnProperty("results")) {
            for (var i = 0; i < rawData.results.length; i++) {
                let row: any = rawData.results[i];
                movie = ReviewDescriptor.import(row);
                response.results.push(movie);
            }
        }
        return response;
    }
}