import {FC, useEffect, useRef, useState} from 'react';
import {IMovie} from "../types/IMovie.ts";
import MovieCard from "../components/MovieCard.tsx";
import KinopoiskApi from "../api/kinopoiskApi.ts";
import Loader from "../components/ui/Loader.tsx";
import {useObserver} from "../hooks/useObserver.ts";
import Filters from "../components/filters/Filters.tsx";

const SeriesPage: FC = () => {
    const [series, setSeries] = useState<IMovie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const lastElement = useRef<HTMLDivElement | null>(null)

    const fetchFilms = async () => {
        try {
            setIsLoading(true);
            const response = await KinopoiskApi.getPopularSeries(24, page)
            setSeries([...series, ...response.movies]);
            setTotalPages(response.pages)
        } catch (e: unknown) {
            const error = e as Error
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useObserver(lastElement, page < totalPages, isLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchFilms()
    }, [page]);
    return (
        error
            ?
            <h1>{error}</h1>
            :
            <div className={'page'}>
                <div className={'container'}>
                    <Filters/>
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