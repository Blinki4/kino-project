import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FC, useRef} from "react";
import GalleryItem from "./GalleryItem.tsx";
import {IMovie} from "../../types/IMovie.ts";


interface GalleryListProps {
    movies: IMovie[];
}

const GalleryList: FC<GalleryListProps> = ({movies}) => {
    const galleryListRef = useRef<HTMLUListElement>(null);

    const galleryScroll = (direction: string) => {
        let width: number = window.innerWidth
        let scrollOffset: number = 1135
        if (width <= 1280) {
            scrollOffset = 220
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