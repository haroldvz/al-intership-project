
export class VideoDescriptor {
    public id: string;
    public iso_639_1: string;
    public iso_3166_1: string;
    public key: string;
    public name: string;
    public site: string;
    public size: number;
    public type: string;


    /**
     *
     *
     * @static
     * @param {*} rawData
     * @returns
     * @memberof VideoDescriptor
     */
    public static import(rawData: any) {
        let video: VideoDescriptor = new VideoDescriptor();

        video.id = rawData.hasOwnProperty('id') ? rawData.id : '';
        video.iso_639_1 = rawData.hasOwnProperty('iso_639_1') ? rawData.iso_639_1 : '';
        video.iso_3166_1 = rawData.hasOwnProperty('iso_3166_1') ? rawData.iso_3166_1 : '';
        video.key = rawData.hasOwnProperty('key') ? rawData.key : '';
        video.size = rawData.hasOwnProperty('size') ? rawData.size : 0;
        video.name = rawData.hasOwnProperty('name') ? rawData.name : '';
        video.type = rawData.hasOwnProperty('type') ? rawData.type : '';
        video.site = rawData.hasOwnProperty('site') ? rawData.site : '';

        return video;
    }

}

export class ResponseVideoDescriptor {

    public id: number;
    public results: VideoDescriptor[] = [];

    /**
     *
     *
     * @static
     * @param {*} rawData
     * @returns
     * @memberof ResponseVideoDescriptor
     */
    public static import(rawData: any) {

        let response: ResponseVideoDescriptor = new ResponseVideoDescriptor();
        let movie: VideoDescriptor;
        if (rawData.hasOwnProperty("results")) {
            for (var i = 0; i < rawData.results.length; i++) {
                let row: any = rawData.results[i];
                movie = VideoDescriptor.import(row);
                response.results.push(movie);
            }
        }
        return response;
    }
}

