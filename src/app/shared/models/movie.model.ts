import { Deserializable } from "./deserializable.model";

export class MovieModel implements Deserializable{


    id: number;
    title: string;
    overview: string;
    videos: {
      results: any[]
    };
    backdrop_path:string;
    poster_path:string;
    original_title:string;
    vote_average: number;
    release_date: string;
    genres: any[]
    homepage:string;
    imdb_id:string;
    original_language:string;
    popularity:number;
    adult:boolean;

      
  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}