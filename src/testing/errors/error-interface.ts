import { ErrorInterface } from "../../app/shared/services/api.service";

//error 404 test interface
export const error_test_interface:ErrorInterface = {
    error_url: 'https://api.themoviedb.org/3/movies/popular?api_key=235c6475d9cd126de9f124093c798767&page=q',
    error_message:'Http failure response for https://api.themoviedb.org/3/movies/popular?api_key=235c6475d9cd126de9f124093c798767&page=q: 404 Not Found',
    error_status:404
}
