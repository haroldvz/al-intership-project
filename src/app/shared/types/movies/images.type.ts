/**
 *
 *
 * @export
 * @class ImagesMoviesDescriptor
 */
export class ImagesMoviesDescriptor {

    public id: number;
    public backdrops: BackDropsDescriptor[] = [];
    public posters: PosterDescriptor[] = [];

    /**
     *
     *
     * @static
     * @param {*} rawData
     * @returns
     * @memberof CreditsDescriptor
     */
    public static import(rawData: any): ImagesMoviesDescriptor {
        let images: ImagesMoviesDescriptor = new ImagesMoviesDescriptor();


        images.id = rawData.hasOwnProperty('id') ? rawData.id : null;

        let backdrop: BackDropsDescriptor;
        if (rawData.hasOwnProperty("backdrops")) {

            for (let i = 0; i < rawData.backdrops.length; i++) {
                let row: any = rawData.backdrops[i];
                backdrop = BackDropsDescriptor.import(row);
                images.backdrops.push(backdrop);
            }
        }

        let poster: PosterDescriptor;
        if (rawData.hasOwnProperty("posters")) {

            for (let i = 0; i < rawData.posters.length; i++) {
                let row: any = rawData.posters[i];
                poster = PosterDescriptor.import(row);
                images.posters.push(poster);
            }
        }


        return images;
    }
}


/**
 *
 *
 * @export
 * @class BackDropsDescriptor
 */
export class BackDropsDescriptor {
    public aspect_ratio: number;
    public file_path: string;
    public height: number;
    public iso_639_1: string;
    public vote_average: number;
    public vote_count: number;
    public width: number;


    /**
     *
     *
     * @static
     * @param {*} rawData
     * @returns
     * @memberof BackDropsDescriptor
     */
    public static import(rawData: any) {
        let backdropDescriptor: BackDropsDescriptor = new BackDropsDescriptor();

        backdropDescriptor.aspect_ratio = rawData.hasOwnProperty('aspect_ratio') ? rawData.aspect_ratio : -1;
        backdropDescriptor.file_path = rawData.hasOwnProperty('file_path') ? rawData.file_path : '';
        backdropDescriptor.height = rawData.hasOwnProperty('height') ? rawData.height : -1;
        backdropDescriptor.iso_639_1 = rawData.hasOwnProperty('iso_639_1') ? rawData.iso_639_1 : '';
        backdropDescriptor.vote_average = rawData.hasOwnProperty('vote_average') ? rawData.vote_average : -1;
        backdropDescriptor.vote_count = rawData.hasOwnProperty('vote_count') ? rawData.vote_count : -1;
        backdropDescriptor.width = rawData.hasOwnProperty('width') ? rawData.width : -1;
        return backdropDescriptor;
    }
}

/**
 *
 *
 * @export
 * @class PosterDescriptor
 */
export class PosterDescriptor {
    public aspect_ratio: number;
    public file_path: string;
    public height: number;
    public iso_639_1: string;
    public vote_average: number;
    public vote_count: number;
    public width: number;


    /**
     *
     *
     * @static
     * @param {*} rawData
     * @returns
     * @memberof PosterDescriptor
     */
    public static import(rawData: any) {
        let posterDescriptor: PosterDescriptor = new PosterDescriptor();

        posterDescriptor.aspect_ratio = rawData.hasOwnProperty('aspect_ratio') ? rawData.aspect_ratio : -1;
        posterDescriptor.file_path = rawData.hasOwnProperty('file_path') ? rawData.file_path : '';
        posterDescriptor.height = rawData.hasOwnProperty('height') ? rawData.height : -1;
        posterDescriptor.iso_639_1 = rawData.hasOwnProperty('iso_639_1') ? rawData.iso_639_1 : '';
        posterDescriptor.vote_average = rawData.hasOwnProperty('vote_average') ? rawData.vote_average : -1;
        posterDescriptor.vote_count = rawData.hasOwnProperty('vote_count') ? rawData.vote_count : -1;
        posterDescriptor.width = rawData.hasOwnProperty('width') ? rawData.width : -1;
        return posterDescriptor;
    }
}