import { GenreDescriptor } from "./../genres/genres.type";
import { VideoDescriptor } from "../video.type";
import { ReviewDescriptor } from "../reviews/review";

export class TVSeriesDescriptor {

    public id: number;
    public genres: GenreDescriptor[] = [];
    //public created_by: CreatedByDescriptor[] = [];
    public episode_run_time:number[] = [];
    public name: string;
    public original_name:string;
    public overview: string;
    public first_air_date: string;
    public popularity: number;
    public vote_count: number;
    public poster_path: string;
    public backdrop_path:string;
    public homepage:string;
    public in_production:boolean;
    public languages:string[] = [];
    public number_of_episodes:number;
    public number_of_seasons:number;
    public original_language:string;
    //public production_companies;
    //public seasons:SeasonDescriptor[]=[];
    public vote_average:number;
    public videos: VideoDescriptor[] = [];
    public reviews: ReviewDescriptor[] = [];



    /**
     *
     *
     * @static
     * @param {*} rawData
     * @returns
     * @memberof MovieDescriptor
     */
    public static import(rawData: any) {
        let tv_serie: TVSeriesDescriptor = new TVSeriesDescriptor();

        tv_serie.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        tv_serie.name = rawData.hasOwnProperty('name') ? rawData.name : '';
        tv_serie.original_name = rawData.hasOwnProperty('original_name') ? rawData.original_name : '';
        tv_serie.overview = rawData.hasOwnProperty('overview') ? rawData.overview : '';
        tv_serie.first_air_date = rawData.hasOwnProperty('first_air_date') ? rawData.first_air_date : '';
        tv_serie.popularity = rawData.hasOwnProperty('popularity') ? rawData.popularity : 0;
        tv_serie.vote_count = rawData.hasOwnProperty('vote_count') ? rawData.vote_count : 0;
        tv_serie.poster_path = rawData.hasOwnProperty('poster_path') ? rawData.poster_path : '';
        tv_serie.backdrop_path = rawData.hasOwnProperty('backdrop_path') ? rawData.backdrop_path : '';
        tv_serie.vote_average = rawData.hasOwnProperty('vote_average') ? rawData.vote_average : 0;


        let genre: GenreDescriptor;
        if (rawData.hasOwnProperty("genre_ids")) {
            for (var i = 0; i < rawData.genre_ids.length; i++) {
                let row: any = rawData.genre_ids[i];
                genre = GenreDescriptor.import(row);
                tv_serie.genres.push(genre);
            }
        }

        let video: VideoDescriptor;
        if (rawData.hasOwnProperty("videos")) {
            for (var i = 0; i < rawData.videos.results.length; i++) {
                let row: any = rawData.videos.results[i];
                video = VideoDescriptor.import(row);
                tv_serie.videos.push(video);
            }
        }

        let review: ReviewDescriptor;
        if (rawData.hasOwnProperty("reviews")) {
            for (var i = 0; i < rawData.reviews.results.length; i++) {
                let row: any = rawData.reviews.results[i];
                review = ReviewDescriptor.import(row);
                tv_serie.reviews.push(review);
            }
        }


        return tv_serie;
    }
}