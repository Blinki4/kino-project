import React, {FC, use, useEffect, useRef, useState} from 'react';
import {IMovie} from "../types/IMovie.ts";
import MovieCard from "../components/MovieCard.tsx";
import KinopoiskApi from "../api/kinopoiskApi.ts";
import Loader from "../components/ui/Loader.tsx";

const SeriesPage: FC = () => {
    const [series, setSeries] = useState<IMovie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [totalPagesArray, setTotalPagesArray] = useState<number[]>([]);
    const lastElement = useRef<HTMLDivElement | null>(null)
    const observer = useRef<IntersectionObserver | null>(null)

    const getTotalPagesArray = (pages: number): number[] => {
        const result = []

        for (let i = 0; i < pages; i++) {
            result.push(i + 1);
        }

        return result
    }

    const fetchFilms = async () => {
        try {
            setIsLoading(true);
            const response = await KinopoiskApi.getPopularSeries(24, page)
            setSeries([...series, ...response.movies]);
            setTotalPages(response.pages)
            setTotalPagesArray(getTotalPagesArray(response.pages))
        } catch (e: unknown) {
            const error = e as Error
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        const callback = function (entries, observer) {
            if (entries[0].isIntersecting && page < totalPages) {
                console.log(page)
                setPage(page + 1)
            }
        }
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    }, [isLoading]);

    useEffect(() => {
        fetchFilms()
    }, [page]);
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
                <div ref={lastElement}>

                </div>
                {isLoading && <Loader/>}
            </div>
        </div>
    );
};

export default SeriesPage;