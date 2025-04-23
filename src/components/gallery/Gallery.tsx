import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import GalleryList from "./GalleryList.tsx";
import {FC} from "react";
import {IMovie} from "../../types/IMovie.ts";

interface GalleryProps {
    movies: IMovie[],
    title: string,
}

const Gallery: FC<GalleryProps> = ({movies, title}) => {

    return (
        <div className={'container'}>
            <div className={'gallery__header'}>
                <div className={'gallery__header-title'}>{title}</div>
                <FontAwesomeIcon className={'gallery__header-icon'} icon={["fas", 'chevron-right']}/>
            </div>
            <GalleryList movies={movies}/>
        </div>
    );
};

export default Gallery;