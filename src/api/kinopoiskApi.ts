import axios from 'axios'
import {IMovies} from "../types/IMovies.ts";

export default class KinopoiskApi {
    static apiKey: string = 'A79KAPT-Z90MT84-NJ6H62R-H6MHJZD';
    static baseUrl: string = 'https://api.kinopoisk.dev/v1.4';

    static async getPopularMovies(limit: number, page: number) {
        const response = await axios.get<IMovies>(this.baseUrl + '/movie', {
            params: {
                lists: 'theme_comics', //TODO Другой список
                limit,
                page,
            },
            headers: {
                'X-API-KEY': this.apiKey,
            }
        });

        return response.data.docs
    }
}