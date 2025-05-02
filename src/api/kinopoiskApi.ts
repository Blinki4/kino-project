import axios from 'axios'
import {IMovies} from "../types/IMovies.ts";
import {serializeParams} from "../utils/serializeParams.ts";
import {IMovie} from "../types/IMovie.ts";

export default class KinopoiskApi {
    static API_KEY: string = 'B016V3C-ZENM92A-N6JZY88-33YDKMX';
    static BASE_URL: string = 'https://api.kinopoisk.dev/v1.4';

    static async getCarouselMovies(limit: number, page: number) {
        const params = new URLSearchParams();
        params.append('limit', limit.toString());
        params.append('page', page.toString());
        params.append('type', 'movie');
        params.append('lists', 'popular-films');
        serializeParams(params, 'notNullFields', ['name', 'poster.url', 'backdrop.url', 'rating.kp', 'movieLength', 'shortDescription', 'budget.value'])
        const response = await axios.get<IMovies>(this.BASE_URL + '/movie', {
            params,
            headers: {
                'X-API-KEY': this.API_KEY,
            }
        });

        return response.data.docs
    }

    static async getPopularMovies(limit: number, page: number) {
        const params = new URLSearchParams();
        params.append('limit', limit.toString());
        params.append('page', page.toString());
        params.append('type', 'movie');
        params.append('lists', 'popular-films');
        serializeParams(params, 'notNullFields', ['name', 'poster.url', 'backdrop.url', 'rating.kp', 'movieLength', 'budget.value'])
        const response = await axios.get<IMovies>(this.BASE_URL + '/movie', {
            params,
            headers: {
                'X-API-KEY': this.API_KEY,
            }
        });

        response.data.docs.sort((a, b) => a.rating.kp < b.rating.kp ? 1 : -1)
        return response.data.docs
    }

    static async getPopularSeries(limit: number, page: number) {
        const params = new URLSearchParams();
        params.append('limit', limit.toString());
        params.append('page', page.toString());
        params.append('type', 'tv-series');
        serializeParams(params, 'notNullFields', ['name', 'poster.url', 'backdrop.url', 'rating.kp', 'seriesLength', 'budget.value'])
        const response = await axios.get<IMovies>(`${this.BASE_URL}/movie`, {
            params,
            headers: {
                'X-API-KEY': this.API_KEY,
            }
        });

        response.data.docs.sort((a, b) => a.rating.kp < b.rating.kp ? 1 : -1)
        return response.data.docs
    }

    static async getPopularCartoons(limit: number, page: number) {
        const params = new URLSearchParams();
        params.append('limit', limit.toString());
        params.append('page', page.toString());
        params.append('type', 'cartoon');
        serializeParams(params, 'notNullFields', ['name', 'poster.url', 'backdrop.url', 'rating.kp', 'budget.value'])
        const response = await axios.get<IMovies>(`${this.BASE_URL}/movie`, {
            params,
            headers: {
                'X-API-KEY': this.API_KEY,
            }
        });

        response.data.docs.sort((a, b) => a.rating.kp < b.rating.kp ? 1 : -1)
        return response.data.docs
    }

    static async getMovie(id: string) {
        const response = await axios.get<IMovie>(`${this.BASE_URL}/movie/${id}`, {
            headers: {
                'X-API-KEY': this.API_KEY,
            }
        });

        return response.data
    }

    static async search(query: string, limit: number = 10, page: number = 1) {
        const response = await axios.get<IMovies>(`${this.BASE_URL}/movie/search`, {
            params: {
                query,
                limit,
                page,
            },
            headers: {
                'X-API-KEY': this.API_KEY,
            }
        });

        return response.data.docs;
    }
}