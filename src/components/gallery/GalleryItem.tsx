import {Movie} from "../../types/Movie.ts";
import {FC, useRef} from "react";
import useHover from "../../hooks/useHover.ts";

interface GalleryItemProps {
    movie: Movie
}

//TODO При наведении на постер затемнять его и сверху отображать оценку, длительность и страну (Use hover)
//TODO функция для длительности фильмов

const GalleryItem: FC<GalleryItemProps> = ({movie}) => {
    const posterRef = useRef<HTMLImageElement>(null);
    const isHover = useHover(posterRef);


    return (
        <li className={'gallery__item'}>
            <div className={'card'}>
                <div ref={posterRef} className={'hover-wrapper'}>
                    <img src={movie.poster} alt={movie.poster} className={'card__poster'}/>
                    {
                        isHover
                        &&
                        <div className={'hover'}>
                            <div className={'hover__rating'}>{movie.rating}</div>
                            <div className={'hover__duration'}>{movie.movieLength}</div>
                        </div>
                    }
                </div>
                <div className={'card__info'}>
                    <div className={'card__info-title'}>
                        {movie.title}
                    </div>
                    <div className={'card__info-year'}>
                        {movie.ageRating + '+'}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default GalleryItem;