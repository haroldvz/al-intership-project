import { GenreDescriptor } from "../genres/genres.type";

/**
 *
 *
 * @export
 * @class CreditsPersonDescriptor
 */
export class CreditsPersonDescriptor {

    public id: number;
    public cast: CastCreditsPeopleDescriptor[] = [];
    //public crew: CrewDescriptor[] = [];

    /**
     *
     *
     * @static
     * @param {*} rawData
     * @returns
     * @memberof CreditsDescriptor
     */
    public static import(rawData: any): CreditsPersonDescriptor {
        let credits: CreditsPersonDescriptor = new CreditsPersonDescriptor();


        credits.id = rawData.hasOwnProperty('id') ? rawData.id : null;

        /*let crew: CrewDescriptor;
        if (rawData.hasOwnProperty("crew")) {
            console.log(rawData.crew.length);
            for (let i = 0; i < rawData.crew.length; i++) {
                let row: any = rawData.crew[i];
                crew = CrewDescriptor.import(row);
                credits.crew.push(crew);
            }
        }*/

        let cast: CastCreditsPeopleDescriptor;
        if (rawData.hasOwnProperty("cast")) {
            console.log(rawData.cast.length);
            for (let i = 0; i < rawData.cast.length; i++) {
                let row: any = rawData.cast[i];
                cast = CastCreditsPeopleDescriptor.import(row);
                credits.cast.push(cast);
            }
        }


        return credits;
    }
}


/*export class CrewDescriptor {
    public credit_id: string;
    public department: string;
    public gender: number;
    public id: number;
    public job: string;
    public name: string;
    public profile_path: string;


    public static import(rawData: any) {
        let crewDescriptor: CrewDescriptor = new CrewDescriptor();

        crewDescriptor.credit_id = rawData.hasOwnProperty('credit_id') ? rawData.credit_id : '';
        crewDescriptor.department = rawData.hasOwnProperty('department') ? rawData.department : '';
        crewDescriptor.gender = rawData.hasOwnProperty('gender') ? rawData.gender : -1;
        crewDescriptor.id = rawData.hasOwnProperty('id') ? rawData.id : -1;
        crewDescriptor.job = rawData.hasOwnProperty('job') ? rawData.job : '';
        crewDescriptor.name = rawData.hasOwnProperty('name') ? rawData.name : '';
        crewDescriptor.profile_path = rawData.hasOwnProperty('profile_path') ? rawData.profile_path : '';
        return crewDescriptor;
    }
}*/


export class CastCreditsPeopleDescriptor {
    public character: string;
    public credit_id: string;
    public id: number;
    public title: string;
    public poster_path: string;
    public video: boolean;
    public genres: GenreDescriptor[] = [];
    public release_date: string;
    public overview: string;
    public popularity: number;
    public original_language: string;
    public vote_count:number;
    public backdrop_path:string;


    public static import(rawData: any) {
        let castCreditsPeopleDescriptor: CastCreditsPeopleDescriptor = new CastCreditsPeopleDescriptor();

        castCreditsPeopleDescriptor.character = rawData.hasOwnProperty('character') ? rawData.character : '';
        castCreditsPeopleDescriptor.credit_id = rawData.hasOwnProperty('credit_id') ? rawData.credit_id : '';
        castCreditsPeopleDescriptor.id = rawData.hasOwnProperty('id') ? rawData.id : -1;
        castCreditsPeopleDescriptor.title = rawData.hasOwnProperty('title') ? rawData.title : '';
        castCreditsPeopleDescriptor.poster_path = rawData.hasOwnProperty('poster_path') ? rawData.poster_path : '';
        castCreditsPeopleDescriptor.backdrop_path = rawData.hasOwnProperty('backdrop_path') ? rawData.backdrop_path : '';
        
        
        castCreditsPeopleDescriptor.release_date = rawData.hasOwnProperty('release_date') ? rawData.release_date : '';
        castCreditsPeopleDescriptor.overview = rawData.hasOwnProperty('overview') ? rawData.overview : '';
        castCreditsPeopleDescriptor.popularity = rawData.hasOwnProperty('popularity') ? rawData.popularity : -1;
        castCreditsPeopleDescriptor.original_language = rawData.hasOwnProperty('original_language') ? rawData.original_language : '';
        castCreditsPeopleDescriptor.vote_count = rawData.hasOwnProperty('vote_count') ? rawData.vote_count : -1;
        
        return castCreditsPeopleDescriptor;
    }
}