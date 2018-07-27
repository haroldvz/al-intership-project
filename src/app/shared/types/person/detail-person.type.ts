import { MovieDescriptor } from "../movies/detail-movie.type";


/**
 *
 *
 * @export
 * @class PersonDescriptor
 */
export class PersonDescriptor {

    public id: number;
    public birthday: string;
    public deathday: string;
    public name: string;
    //public also_known_as: string[];
    public gender: number;
    public biography: string;
    public popularity: number;
    public place_of_birth: string;
    public profile_path: string;
    public adult: boolean;
    public imdb_id: string;
    public homepage: string;
    //public known_for: MovieDescriptor[];


    /**
     *
     *
     * @static
     * @param {*} rawData
     * @returns
     * @memberof PersonDescriptor
     */
    public static import(rawData: any) {
        let person: PersonDescriptor = new PersonDescriptor();

        person.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        person.birthday = rawData.hasOwnProperty('birthday') ? rawData.birthday : '';
        person.deathday = rawData.hasOwnProperty('deathday') ? rawData.deathday : '';
        person.name = rawData.hasOwnProperty('name') ? rawData.name : '';

        //person.also_known_as = rawData.hasOwnProperty('also_known_as') ? rawData.also_known_as : [];
        //person.known_for = rawData.hasOwnProperty('known_for') ? rawData.known_for : [];

        /*if (rawData.hasOwnProperty("also_known_as")) {
            for (let i = 0; i < rawData.also_known_as.length; i++) {
                let row: any = rawData.also_known_as[i];
                person.also_known_as.push(row);
            }
        }*/

       /* let movie: MovieDescriptor;
        if (rawData.hasOwnProperty("known_for")) {
            for (let i = 0; i < rawData.known_for.length; i++) {
                let row: any = rawData.known_for[i];
                movie = MovieDescriptor.import(row);
                person.known_for.push(movie);
            }
        }*/

        person.gender = rawData.hasOwnProperty('gender') ? rawData.gender : -1;
        person.biography = rawData.hasOwnProperty('biography') ? rawData.biography : '';
        person.popularity = rawData.hasOwnProperty('popularity') ? rawData.popularity : -1;
        person.place_of_birth = rawData.hasOwnProperty('place_of_birth') ? rawData.place_of_birth : '';
        person.profile_path = rawData.hasOwnProperty('profile_path') ? rawData.profile_path : '';
        person.adult = rawData.hasOwnProperty('adult') ? rawData.adult : false;
        person.imdb_id = rawData.hasOwnProperty('imdb_id') ? rawData.id : '';
        person.homepage = rawData.hasOwnProperty('homepage') ? rawData.homepage : '';

        return person;
    }
}