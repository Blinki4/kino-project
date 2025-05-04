import {useEffect, useRef, useState} from "react";
import {IMovie} from "../types/IMovie.ts";
import KinopoiskApi from "../api/kinopoiskApi.ts";
import MovieCard from "../components/MovieCard.tsx";
import Loader from "../components/ui/Loader.tsx";

const FilmsPage = () => {
    const [films, setFilms] = useState<IMovie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [page, setPage] = useState<number>(1)
    const lastElement = useRef<HTMLDivElement | null>(null)
    const observer = useRef<IntersectionObserver | null>(null)

    console.log(error)

    const fetchFilms = async () => {
        try {
            setIsLoading(true);
            const response = await KinopoiskApi.getPopularMovies(30, page)
            setFilms([...films, ...response])
        } catch (e: unknown) {
            const error = e as Error
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {
        const callback = function () {
            if (isLoading) {
                return
            }
            console.log(page)
            setPage((prev) => prev + 1)
        }
        observer.current = new IntersectionObserver(callback)
        observer.current.observe(lastElement.current!)
    }, [])


    useEffect(() => {
        if (isLoading) {
            return
        }
        fetchFilms()
    }, [page])

    return (
        // isLoading
        //     ?
        //     <Loader/>
        //     :
        //     error
        //         ?
        //         <h1>{error}</h1>
        //         :
        <div className={'page'}>
            <div className={'container'}>
                ФИЛЬТРЫ
            </div>
            <div className={'container'}>
                <div className={'films'}>
                    <ul className={'films__list'}>
                        {films.map((movie: IMovie) =>
                            <MovieCard key={movie.id} movie={movie}/>
                        )}
                    </ul>
                    {isLoading && <Loader/>}
                    <div ref={lastElement}></div>
                </div>
            </div>
        </div>
    );
};

export default FilmsPage;