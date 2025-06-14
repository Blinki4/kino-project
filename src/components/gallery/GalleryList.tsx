import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FC, useRef} from "react";
import MovieCard from "../MovieCard.tsx";
import {galleryService} from "../../services/galleryService.ts";
import {IMovie} from "../../types/IMovie.ts";


interface GalleryListProps {
    movies: IMovie[];
}

const GalleryList: FC<GalleryListProps> = ({movies}) => {
    const galleryListRef = useRef<HTMLUListElement>(null);

    return (
        <div className={'gallery'}>
            <FontAwesomeIcon className={'gallery__list-icon'} icon={["fas", 'chevron-left']}
                             onClick={() => galleryService.galleryScroll('left', galleryListRef)}/>
            <ul ref={galleryListRef} className={'gallery__list'}>
                {movies.map(movie =>
                    <MovieCard key={movie.id} movie={movie}/>
                )}
            </ul>
            <FontAwesomeIcon className={'gallery__list-icon'} icon={["fas", 'chevron-right']}
                             onClick={() => galleryService.galleryScroll('right', galleryListRef)}/>
        </div>
    );
};

export default GalleryList;