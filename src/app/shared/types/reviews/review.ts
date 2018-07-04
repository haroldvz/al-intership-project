

export class ReviewDescriptor {

    public id: string;

    public author: string;
    public content: string;
    public url: string;


    /**
     *
     *
     * @static
     * @param {*} rawData
     * @returns
     * @memberof ReviewDescriptor
     */
    public static import(rawData: any) {
        let review: ReviewDescriptor = new ReviewDescriptor();

        review.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        review.author = rawData.hasOwnProperty('author') ? rawData.author : '';
        review.content = rawData.hasOwnProperty('content') ? rawData.content : '';
        review.url = rawData.hasOwnProperty('url') ? rawData.url : '';


        return review;
    }
}

