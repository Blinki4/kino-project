import {FC, useEffect, useState} from "react";
import Gallery from "../components/gallery/Gallery.tsx";
import Carousel from "../components/carousel/Carousel.tsx";
import KinopoiskApi from "../api/kinopoiskApi.ts";
import {IMovie} from "../types/IMovie.ts";
import {useAppStore} from "../store/appStore.ts";

const MainPage: FC = () => {
    const [galleryMovies, setGalleryMovies] = useState<IMovie[]>([])
    const [carouselMovies, setCarouselMovies] = useState<IMovie[]>([])
    const {isLoading, error, setIsLoading, setError} = useAppStore(store => store)

    const fetchAll = async () => {
        try {
            setIsLoading(true)
            setGalleryMovies(await KinopoiskApi.getPopularMovies(18, 1))
            setCarouselMovies(await KinopoiskApi.getCarouselMovies(5, 1))
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

    if (error) {
        return <h1>{error}</h1>
    }

    return (

        isLoading
            ?
            <h1>LOADER</h1>
            :

            <div className={'page'}>
                <Carousel movies={carouselMovies}/>
                <Gallery movies={galleryMovies} title={'Фильмы-новинки'}/>
                <Gallery movies={galleryMovies} title={'Сериалы'}/>
                <Gallery movies={galleryMovies} title={'Мультфильмы'}/>
            </div>
    );
};

export default MainPage;

