import {Movie} from "../../types/Movie.ts";
import {FC} from "react";

interface GalleryItemProps {
    movie: Movie
}

const GalleryItem: FC<GalleryItemProps> = ({movie}) => {
    return (
        <li className={'gallery__item'}>
            <div className={'card'}>
                <img src={movie.poster} alt="" className={'card__poster'}/>
                <div className={'card__info'}>
                    <div className={'card__info-title'}>
                        {movie.title}
                    </div>
                    <div className={'card__info-year'}>
                        {movie.year}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default GalleryItem;