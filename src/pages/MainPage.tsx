import {FC, useEffect, useState} from "react";
import Gallery from "../components/gallery/Gallery.tsx";
import Carousel from "../components/carousel/Carousel.tsx";
import KinopoiskApi from "../api/kinopoiskApi.ts";
import {IMovie} from "../types/IMovie.ts";
import {useAppStore} from "../store/appStore.ts";
import 'ldrs/react/Ring.css'
import Loader from "../components/ui/Loader.tsx";

const MainPage: FC = () => {
    const [carouselMovies, setCarouselMovies] = useState<IMovie[]>([]);
    const [popularMovies, setPopularMovies] = useState<IMovie[]>([]);
    const [popularSeries, setPopularSeries] = useState<IMovie[]>([]);
    const [popularCartoon, setPopularCartoon] = useState<IMovie[]>([])
    const {isLoading, error, setIsLoading, setError} = useAppStore(store => store)

    const fetchAll = async () => {
        try {
            setIsLoading(true)
            const movies = await KinopoiskApi.getPopularMovies(18, 1)
            const series = await KinopoiskApi.getPopularSeries(18, 1)
            setCarouselMovies(await KinopoiskApi.getCarouselMovies(5, 1));
            setPopularMovies(movies.movies);
            setPopularSeries(series.movies);
            setPopularCartoon(await KinopoiskApi.getPopularCartoons(18, 1));
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
                    <Carousel movies={carouselMovies}/>
                    <Gallery movies={popularMovies} title={'Фильмы-новинки'}/>
                    <Gallery movies={popularSeries} title={'Сериалы'}/>
                    <Gallery movies={popularCartoon} title={'Мультфильмы'}/>
                </div>
    );
};

export default MainPage;

