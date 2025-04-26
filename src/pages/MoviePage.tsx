import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {IMovie} from "../types/IMovie.ts";
import MoviePageItem from "../components/movie-page-item/MoviePageItem.tsx";
import {useAppStore} from "../store/appStore.ts";
import KinopoiskApi from "../api/kinopoiskApi.ts";
import Loader from "../components/ui/Loader.tsx";

type MoviePageParams = {
    id: string
}

const MoviePage: FC = () => {
    const params = useParams<MoviePageParams>();
    const [movie, setMovie] = useState<IMovie>();
    const {isLoading, error, setIsLoading, setError} = useAppStore(store => store);

    const fetchAll = async () => {
        try {
            setIsLoading(true)
            setMovie(await KinopoiskApi.getMovie(params.id || '666'))
        } catch (e: unknown) {
            const error = e as Error
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchAll()
    }, []);

    return (
        isLoading
            ?
            <Loader/>
            :
            error
                ?
                <h1>{error}</h1>
                :
                <div className={'page'}>
                    <div className={'container'}>
                        <MoviePageItem movie={movie!}/>
                    </div>
                </div>
    );
};

export default MoviePage;