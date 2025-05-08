import {IMovie} from "./IMovie.ts";

export interface IMovies {
    docs: IMovie[];
    total: number;
    limit: number;
    page: number;
    pages: number;
}