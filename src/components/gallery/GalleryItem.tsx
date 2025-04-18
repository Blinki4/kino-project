import {IMovie} from "../../types/IMovie.ts";
import {FC, useRef} from "react";
import useHover from "../../hooks/useHover.ts";
import {getParsedMovieLength} from "../../utils/getParsedMovieLength.ts";

interface GalleryItemProps {
    movie: IMovie
}

//TODO При наведении на постер затемнять его и сверху отображать оценку, длительность и страну (Use hover)
//TODO функция для длительности фильмов

const GalleryItem: FC<GalleryItemProps> = ({movie}) => {
    const posterRef = useRef<HTMLImageElement>(null);
    const isHover = useHover(posterRef);

    const parsedLength = getParsedMovieLength(movie.movieLength)

    return (
        <li className={'gallery__item'}>
            <div className={'card'}>
                <div ref={posterRef} className={'hover-wrapper'}>
                    <img src={movie.poster} alt={movie.poster} className={'card__poster'}/>
                    {isHover
                        &&
                        <div className={'hover'}>
                            <p className={'hover__rating'}>{movie.rating}</p>
                            <div className={'hover__info'}>
                                <p className={'hover__info-duration'}>{parsedLength}</p>
                                <p className={'hover__info-country'}>{movie.country}</p>
                            </div>
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