import {FC, useEffect, useState} from "react";
import Gallery from "../components/gallery/Gallery.tsx";
import {IMovieLess} from "../types/IMovieLess.ts";
import Carousel from "../components/carousel/Carousel.tsx";
import spiderPoster from "../assets/spider-man-bg.jpg";
import KinopoiskApi from "../api/kinopoiskApi.ts";
import {IMovie} from "../types/IMovie.ts";
import {useAppStore} from "../store/appStore.ts";

const MainPage: FC = () => {
    const [galleryMovies, setGalleryMovies] = useState<IMovie[]>([])
    const {isLoading, error, setIsLoading, setError} = useAppStore(store => store)
    const carouselMovies: IMovieLess[] = [
        {
            id: 0,
            title: 'Человек-паук: Через вселенные',
            year: 2018,
            poster: spiderPoster,
            rating: 8.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 183,
        },
        {
            id: 1,
            title: 'Spider-man',
            year: 2011,
            poster: spiderPoster,
            rating: 7.1,
            ageRating: 18,
            country: 'USA',
            movieLength: 13,
        },
        {
            id: 2,
            title: 'Третий',
            year: 1998,
            poster: spiderPoster,
            rating: 4.4,
            ageRating: 18,
            country: 'Россия',
            movieLength: 173,
        },
        {
            id: 3,
            title: 'Четвертый',
            year: 1998,
            poster: spiderPoster,
            rating: 4.4,
            ageRating: 18,
            country: 'Россия',
            movieLength: 173,
        },
        {
            id: 4,
            title: 'Пятый элемент',
            year: 1998,
            poster: spiderPoster,
            rating: 4.4,
            ageRating: 18,
            country: 'Россия',
            movieLength: 173,
        },
    ];

    const fetchAll = async () => {
        try {
            setIsLoading(true)
            setGalleryMovies(await KinopoiskApi.getPopularMovies(18, 1))
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

