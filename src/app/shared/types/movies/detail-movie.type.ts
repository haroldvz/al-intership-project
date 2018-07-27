import { GenreDescriptor } from "./../genres/genres.type";
import { VideoDescriptor } from "../video.type";
import { ReviewDescriptor } from "../reviews/review";

/**
 *
 *
 * @export
 * @class MovieDescriptor
 */
export class MovieDescriptor {

    public id: number;
    public genres: GenreDescriptor[] = [];
    public title: string;
    public overview: string;
    public release_date: string;
    public popularity: number;
    public vote_average: number;
    public vote_count: number;
    public production_companies: ProductionCompanyDescriptor[] = [];
    public production_countries: ProductionCountryDescriptor[] = [];
    public spoken_languages: SpokenLanguageDescriptor[] = [];
    public poster_path: string;
    public backdrop_path: string;
    public runtime: number;
    public revenue: number;
    public imdb_id: string;
    public homepage: string;
    public budget: number;
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
        let movie: MovieDescriptor = new MovieDescriptor();

        movie.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        movie.title = rawData.hasOwnProperty('title') ? rawData.title : '';
        movie.overview = rawData.hasOwnProperty('overview') ? rawData.overview : '';
        movie.release_date = rawData.hasOwnProperty('release_date') ? rawData.release_date : '---';
        movie.popularity = rawData.hasOwnProperty('popularity') ? rawData.popularity : 0;
        movie.vote_average = rawData.hasOwnProperty('vote_average') ? rawData.vote_average : 0;
        movie.vote_count = rawData.hasOwnProperty('vote_count') ? rawData.vote_count : 0;
        movie.poster_path = rawData.hasOwnProperty('poster_path') ? rawData.poster_path : '';
        movie.backdrop_path = rawData.hasOwnProperty('backdrop_path') ? rawData.backdrop_path : '';

        movie.runtime = rawData.hasOwnProperty('runtime') ? rawData.runtime : 0;
        movie.revenue = rawData.hasOwnProperty('revenue') ? rawData.revenue : 0;
        movie.imdb_id = rawData.hasOwnProperty('imdb_id') ? rawData.imdb_id : '';
        movie.homepage = rawData.hasOwnProperty('homepage') ? rawData.homepage : '';
        movie.budget = rawData.hasOwnProperty('budget') ? rawData.budget : 0;


        let genre: GenreDescriptor;
        if (rawData.hasOwnProperty("genres")) {
            for (var i = 0; i < rawData.genres.length; i++) {
                let row: any = rawData.genres[i];
                genre = GenreDescriptor.import(row);
                movie.genres.push(genre);
            }
        }

        let video: VideoDescriptor;
        if (rawData.hasOwnProperty("videos")) {
            for (var i = 0; i < rawData.videos.results.length; i++) {
                let row: any = rawData.videos.results[i];
                video = VideoDescriptor.import(row);
                movie.videos.push(video);
            }
        }

        let review: ReviewDescriptor;
        if (rawData.hasOwnProperty("reviews")) {
            for (var i = 0; i < rawData.reviews.results.length; i++) {
                let row: any = rawData.reviews.results[i];
                review = ReviewDescriptor.import(row);
                movie.reviews.push(review);
            }
        }


        let production_company: ProductionCompanyDescriptor;
        if (rawData.hasOwnProperty("production_companies")) {
            for (var i = 0; i < rawData.production_companies.length; i++) {
                let row: any = rawData.production_companies[i];
                production_company = ProductionCompanyDescriptor.import(row);
                movie.production_companies.push(production_company);
            }
        }

        let production_country: ProductionCountryDescriptor;
        if (rawData.hasOwnProperty("production_countries")) {
            for (var i = 0; i < rawData.production_countries.length; i++) {
                let row: any = rawData.production_countries[i];
                production_country = ProductionCountryDescriptor.import(row);
                movie.production_countries.push(production_country);
            }
        }

        let spoken_language: SpokenLanguageDescriptor;
        if (rawData.hasOwnProperty("spoken_languages")) {
            for (var i = 0; i < rawData.spoken_languages.length; i++) {
                let row: any = rawData.spoken_languages[i];
                spoken_language = SpokenLanguageDescriptor.import(row);
                movie.spoken_languages.push(spoken_language);
            }
        }

        return movie;
    }
}

export class ProductionCompanyDescriptor {
    public name: string;

    public static import(rawData: any) {
        let productionCompanyDescriptor: ProductionCompanyDescriptor = new ProductionCompanyDescriptor();

        productionCompanyDescriptor.name = rawData.hasOwnProperty('name') ? rawData.name : '';
        return productionCompanyDescriptor;
    }
}

export class ProductionCountryDescriptor {
    public name: string;

    public static import(rawData: any) {
        let productionCountryDescriptor: ProductionCountryDescriptor = new ProductionCountryDescriptor();

        productionCountryDescriptor.name = rawData.hasOwnProperty('name') ? rawData.name : '';
        return productionCountryDescriptor;
    }
}

export class SpokenLanguageDescriptor {
    public name: string;

    public static import(rawData: any) {
        let spokenLanguageDescriptor: SpokenLanguageDescriptor = new SpokenLanguageDescriptor();

        spokenLanguageDescriptor.name = rawData.hasOwnProperty('name') ? rawData.name : '';
        return spokenLanguageDescriptor;
    }
}