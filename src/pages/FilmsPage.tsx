import {useEffect, useRef, useState} from "react";
import {IMovie} from "../types/IMovie.ts";
import KinopoiskApi from "../api/kinopoiskApi.ts";
import MovieCard from "../components/MovieCard.tsx";
import Loader from "../components/ui/Loader.tsx";
import {useObserver} from "../hooks/useObserver.ts";
import Filters from "../components/filters/Filters.tsx";
import {useFiltersStore} from "../store/filtersStore.ts";

const FilmsPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const lastElement = useRef<HTMLDivElement | null>(null)
    const {genre, year, rating} = useFiltersStore(state => state);

    const fetchFilms = async () => {
        try {
            setIsLoading(true);
            if (genre || year || rating) {
                const response = await KinopoiskApi.getMoviesWithFilters(24, page, genre, year, rating);
                if (page === 1) {
                    setMovies(response.movies);
                } else {
                    setMovies([...movies, ...response.movies]);
                }
                setTotalPages(response.pages);
            } else {
                const response = await KinopoiskApi.getPopularMovies(24, page);
                setMovies([...movies, ...response.movies]);
                setTotalPages(response.pages);
            }
        } catch (e: unknown) {
            const error = e as Error
            setError(error.message);
        } finally {
            setIsLoading(false)
        }
    }

    useObserver(lastElement, page < totalPages, isLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        setPage(1)
    }, [genre, year, rating]);

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
                    <Filters clickHandler={fetchFilms}/>
                </div>
                <div className={'container'}>
                    <div className={'films'}>
                        <ul className={'films__list'}>
                            {movies.map((movie: IMovie) =>
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

export default FilmsPage;