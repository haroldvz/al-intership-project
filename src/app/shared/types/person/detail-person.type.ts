export class PersonDescriptor {

    public id: number;
    //public genres: GenreDescriptor[] = [];

    public popularity: number;

    /*public production_companies: ProductionCompanyDescriptor[] = [];
    public production_countries: ProductionCountryDescriptor[] = [];
    public spoken_languages: SpokenLanguageDescriptor[] = [];*/
    public poster_path: string;
    public backdrop_path: string;


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

        person.popularity = rawData.hasOwnProperty('popularity') ? rawData.popularity : 0;

        person.poster_path = rawData.hasOwnProperty('poster_path') ? rawData.poster_path : '';
        person.backdrop_path = rawData.hasOwnProperty('backdrop_path') ? rawData.backdrop_path : '';


        return person;
    }
}