import {FC} from "react";
import Gallery from "../components/gallery/Gallery.tsx";
import {IMovie} from "../types/IMovie.ts";
import batmanPoster from "../assets/batman-poster.png";

const MainPage: FC = () => {
    const movies: IMovie[] = [
        {
            id: 0,
            title: 'Batman',
            year: 2018,
            poster: batmanPoster,
            rating: 8.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 183,
        },
        {
            id: 1,
            title: 'Spider-man',
            year: 2011,
            poster: batmanPoster,
            rating: 7.1,
            ageRating: 18,
            country: 'USA',
            movieLength: 13,
        },
        {
            id: 2,
            title: 'Shining',
            year: 1998,
            poster: batmanPoster,
            rating: 4.4,
            ageRating: 18,
            country: 'Россия',
            movieLength: 173,
        },
        {
            id: 3,
            title: 'Silicon Valley',
            year: 2018,
            poster: batmanPoster,
            rating: 8.3,
            ageRating: 18,
            country: 'Испания',
            movieLength: 173,
        },
        {
            id: 4,
            title: 'MacBook',
            year: 2011,
            poster: batmanPoster,
            rating: 8.9,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 5,
            title: 'Mortal Combat',
            year: 1998,
            poster: batmanPoster,
            rating: 6.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 6,
            title: 'Minecraft',
            year: 2018,
            poster: batmanPoster,
            rating: 7.6,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 7,
            title: 'Five Nights at Freddy`s',
            year: 2011,
            poster: batmanPoster,
            rating: 6.6,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 8,
            title: 'Borderlands',
            year: 1998,
            poster: batmanPoster,
            rating: 8.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 9,
            title: 'Venom',
            year: 2018,
            poster: batmanPoster,
            rating: 8.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 10,
            title: 'Spider-man: Across The Spiderverse',
            year: 2011,
            poster: batmanPoster,
            rating: 8.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 11,
            title: 'Mask',
            year: 1998,
            poster: batmanPoster,
            rating: 8.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 12,
            title: 'Adrenaline Rush',
            year: 2018,
            poster: batmanPoster,
            rating: 8.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 13,
            title: 'Devtools',
            year: 2011,
            poster: batmanPoster,
            rating: 8.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 14,
            title: 'Azazin',
            year: 1998,
            poster: batmanPoster,
            rating: 8.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 15,
            title: 'Agent 007',
            year: 2011,
            poster: batmanPoster,
            rating: 8.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 16,
            title: 'Ghost of Thushima',
            year: 1998,
            poster: batmanPoster,
            rating: 8.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 17,
            title: 'Sugar',
            year: 2011,
            poster: batmanPoster,
            rating: 8.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
    ];

    return (
        <div className={'page'}>
            <div className={'container'}>
                <h2>Карусель</h2>
            </div>
            <Gallery movies={movies} title={'Фильмы-новинки'}/>
            <Gallery movies={movies} title={'Сериалы'}/>
            <Gallery movies={movies} title={'Мультфильмы'}/>
        </div>
    );
};

export default MainPage;

