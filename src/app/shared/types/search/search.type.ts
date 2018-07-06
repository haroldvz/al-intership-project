import { MovieDescriptor } from "../movies/detail-movie.type";

export class SearchDescriptor {

    //tv
    public original_name: string;
    public id: number;
    public media_type: string;
    public name: string;
    public vote_average: number;
    public vote_count: number;
    public poster_path: string;
    public profile_path: string;
    public first_air_date: string;
    public popularity: number;
    //public genres: GenreDescriptor[] = [];
    public original_language: string;
    public backdrop_path: string;
    public overview: string;

    //movie
    public video: boolean;
    public title: string;
    public original_title: string;
    public adult: boolean;
    public release_date: string;

    //person
    public known_for: MovieDescriptor[] = []


    /**
     *
     *
     * @static
     * @param {*} rawData
     * @returns
     * @memberof SearchDescriptor
     */
    public static import(rawData: any) {
        let search_descriptor: SearchDescriptor = new SearchDescriptor();

        search_descriptor.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        search_descriptor.title = rawData.hasOwnProperty('title') ? rawData.title : '';
        search_descriptor.overview = rawData.hasOwnProperty('overview') ? rawData.overview : '';
        search_descriptor.release_date = rawData.hasOwnProperty('release_date') ? rawData.release_date : '';
        search_descriptor.popularity = rawData.hasOwnProperty('popularity') ? rawData.popularity : 0;
        search_descriptor.vote_average = rawData.hasOwnProperty('vote_average') ? rawData.vote_average : 0;
        search_descriptor.vote_count = rawData.hasOwnProperty('vote_count') ? rawData.vote_count : 0;
        search_descriptor.poster_path = rawData.hasOwnProperty('poster_path') ? rawData.poster_path : '';
        search_descriptor.backdrop_path = rawData.hasOwnProperty('backdrop_path') ? rawData.backdrop_path : '';
        search_descriptor.profile_path = rawData.hasOwnProperty('profile_path') ? rawData.profile_path : '';
        search_descriptor.original_name = rawData.hasOwnProperty('original_name') ? rawData.original_name : '';
        search_descriptor.media_type = rawData.hasOwnProperty('media_type') ? rawData.media_type : '';

        search_descriptor.first_air_date = rawData.hasOwnProperty('first_air_date') ? rawData.first_air_date : '';
        search_descriptor.name = rawData.hasOwnProperty('name') ? rawData.name : '';


        /*let genre: GenreDescriptor;
        if (rawData.hasOwnProperty("genres")) {
            for (var i = 0; i < rawData.genres.length; i++) {
                let row: any = rawData.genres[i];
                genre = GenreDescriptor.import(row);
                movie.genres.push(genre);
            }
        }*/


        return search_descriptor;
    }
}