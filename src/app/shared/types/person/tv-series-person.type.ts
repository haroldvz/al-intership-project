import { GenreDescriptor } from "../genres/genres.type";

export class CreditsTVPersonDescriptor {

    public id: number;
    public cast: CastCreditsTVPeopleDescriptor[] = [];
    //public crew: CrewDescriptor[] = [];

    /**
     *
     *
     * @static
     * @param {*} rawData
     * @returns
     * @memberof CreditsDescriptor
     */
    public static import(rawData: any): CreditsTVPersonDescriptor {
        let credits: CreditsTVPersonDescriptor = new CreditsTVPersonDescriptor();


        credits.id = rawData.hasOwnProperty('id') ? rawData.id : null;


        let cast: CastCreditsTVPeopleDescriptor;
        if (rawData.hasOwnProperty("cast")) {
            console.log(rawData.cast.length);
            for (let i = 0; i < rawData.cast.length; i++) {
                let row: any = rawData.cast[i];
                cast = CastCreditsTVPeopleDescriptor.import(row);
                credits.cast.push(cast);
            }
        }


        return credits;
    }
}




export class CastCreditsTVPeopleDescriptor {
    public character: string;
    public credit_id: string;
    public id: number;
    public name: string;
    public poster_path: string;
    public video: boolean;
    public genres: GenreDescriptor[] = [];
    public first_air_date: string;
    public overview: string;
    public popularity: number;
    public original_language: string;
    public vote_count:number;
    public backdrop_path:string;
    public vote_average:number;
    public episode_count:number;


    public static import(rawData: any) {
        let castCreditsTVPeopleDescriptor: CastCreditsTVPeopleDescriptor = new CastCreditsTVPeopleDescriptor();

        castCreditsTVPeopleDescriptor.character = rawData.hasOwnProperty('character') ? rawData.character : '';
        castCreditsTVPeopleDescriptor.credit_id = rawData.hasOwnProperty('credit_id') ? rawData.credit_id : '';
        castCreditsTVPeopleDescriptor.id = rawData.hasOwnProperty('id') ? rawData.id : -1;
        castCreditsTVPeopleDescriptor.episode_count = rawData.hasOwnProperty('episode_count') ? rawData.episode_count : -1;
        castCreditsTVPeopleDescriptor.name = rawData.hasOwnProperty('name') ? rawData.name : '';
        castCreditsTVPeopleDescriptor.poster_path = rawData.hasOwnProperty('poster_path') ? rawData.poster_path : '';
        castCreditsTVPeopleDescriptor.backdrop_path = rawData.hasOwnProperty('backdrop_path') ? rawData.backdrop_path : '';
        
        
        castCreditsTVPeopleDescriptor.first_air_date = rawData.hasOwnProperty('first_air_date') ? rawData.first_air_date : '';
        castCreditsTVPeopleDescriptor.overview = rawData.hasOwnProperty('overview') ? rawData.overview : '';
        castCreditsTVPeopleDescriptor.popularity = rawData.hasOwnProperty('popularity') ? rawData.popularity : -1;
        castCreditsTVPeopleDescriptor.original_language = rawData.hasOwnProperty('original_language') ? rawData.original_language : '';
        castCreditsTVPeopleDescriptor.vote_count = rawData.hasOwnProperty('vote_count') ? rawData.vote_count : -1;
        castCreditsTVPeopleDescriptor.vote_average = rawData.hasOwnProperty('vote_average') ? rawData.vote_average : -1;
        
        return castCreditsTVPeopleDescriptor;
    }
}