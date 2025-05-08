import React, {FC, useEffect, useState} from 'react';
import {IMovie} from "../types/IMovie.ts";
import MovieCard from "../components/MovieCard.tsx";
import KinopoiskApi from "../api/kinopoiskApi.ts";

const SeriesPage: FC = () => {
    const [series, setSeries] = useState<IMovie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number[]>([]);

    const getTotalPagesArray = (pages: number): number[] => {
        const result = []

        for (let i = 0; i < pages; i++) {
            result.push(i);
        }

        return result
    }

    const fetchFilms = async () => {
        try {
            setIsLoading(true);
            const response = await KinopoiskApi.getPopularSeries(30, page)
            setSeries(response.movies);
            setTotalPages(getTotalPagesArray(response.pages))
        } catch (e: unknown) {
            const error = e as Error
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchFilms()
    }, []);

    return (
        <div className={'page'}>
            <div className={'container'}>
                ФИЛЬТРЫ
            </div>
            <div className={'container'}>
                <div className={'films'}>
                    <ul className={'films__list'}>
                        {series.map((movie: IMovie) =>
                            <MovieCard key={movie.id} movie={movie}/>
                        )}
                    </ul>
                </div>
                <div className="pagination">
                    {totalPages.map((page: number) =>
                        <button className={'pagination__item'} key={page}>{page}</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SeriesPage;