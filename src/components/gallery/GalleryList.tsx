import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import batmanPoster from "../../assets/batman-poster.png";
import {useRef} from "react";
import GalleryItem from "./GalleryItem.tsx";
import {Movie} from "../../types/Movie.ts";


const GalleryList = () => {
    const galleryListRef = useRef<HTMLUListElement>(null);
    const movies: Movie[] = [
        {
            id: 0,
            title: 'Batman',
            year: 2018,
            poster: batmanPoster,
            rating: 8.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 1,
            title: 'Spider-man',
            year: 2011,
            poster: batmanPoster,
            rating: 8.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 2,
            title: 'Shining',
            year: 1998,
            poster: batmanPoster,
            rating: 8.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 3,
            title: 'Silicon Valley',
            year: 2018,
            poster: batmanPoster,
            rating: 8.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 4,
            title: 'MacBook',
            year: 2011,
            poster: batmanPoster,
            rating: 8.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 5,
            title: 'Mortal Combat',
            year: 1998,
            poster: batmanPoster,
            rating: 8.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 6,
            title: 'Minecraft',
            year: 2018,
            poster: batmanPoster,
            rating: 8.2,
            ageRating: 18,
            country: 'USA',
            movieLength: 173,
        },
        {
            id: 7,
            title: 'Five Nights at Freddy`s',
            year: 2011,
            poster: batmanPoster,
            rating: 8.2,
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

    const galleryScroll = (direction: string) => {
        let width: number = window.innerWidth
        let scrollOffset: number = 1135
        if (width <= 1080) {
            scrollOffset = 935
        }
        if (direction === 'left') {
            galleryListRef!.current!.scrollLeft -= scrollOffset;
        }
        if (direction === 'right') {
            galleryListRef!.current!.scrollLeft += scrollOffset;
        }
    };

    return (
        <div className={'gallery'}>
            <FontAwesomeIcon className={'gallery__list-icon'} icon={["fas", 'chevron-left']}
                             onClick={() => galleryScroll('left')}/>
            <ul ref={galleryListRef} className={'gallery__list'}>
                {movies.map(movie =>
                    <GalleryItem key={movie.id} movie={movie}/>
                )}
            </ul>
            <FontAwesomeIcon className={'gallery__list-icon'} icon={["fas", 'chevron-right']}
                             onClick={() => galleryScroll('right')}/>
        </div>
    );
};

export default GalleryList;