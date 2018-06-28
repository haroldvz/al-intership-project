export class CreditsDescriptor {

    public id: number;
    public name: string;

    /**
     *
     *
     * @static
     * @param {*} rawData
     * @returns
     * @memberof CreditsDescriptor
     */
    public static import(rawData: any) {
        let movie: CreditsDescriptor = new CreditsDescriptor();

        movie.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        movie.name = rawData.hasOwnProperty('name') ? rawData.name: '';
        return movie;
    }
}