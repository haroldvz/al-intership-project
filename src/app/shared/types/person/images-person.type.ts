/**
 *
 *
 * @export
 * @class ImagesMoviesDescriptor
 */
export class ImagesPersonDescriptor {

    public id: number;
    public profiles: ProfileImagePersonDescriptor[] = [];
   

    /**
     *
     *
     * @static
     * @param {*} rawData
     * @returns
     * @memberof CreditsDescriptor
     */
    public static import(rawData: any): ImagesPersonDescriptor {
        let images: ImagesPersonDescriptor = new ImagesPersonDescriptor();


        images.id = rawData.hasOwnProperty('id') ? rawData.id : null;

        let backdrop: ProfileImagePersonDescriptor;
        if (rawData.hasOwnProperty("profiles")) {

            for (let i = 0; i < rawData.profiles.length; i++) {
                let row: any = rawData.profiles[i];
                backdrop = ProfileImagePersonDescriptor.import(row);
                images.profiles.push(backdrop);
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
export class ProfileImagePersonDescriptor {
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
     * @memberof ProfileImagePersonDescriptor
     */
    public static import(rawData: any) {
        let backdropDescriptor: ProfileImagePersonDescriptor = new ProfileImagePersonDescriptor();

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

