import {FC, useRef} from "react";
import useHover from "../hooks/useHover.ts";
import {getParsedMovieLength} from "../utils/getParsedMovieLength.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {galleryService} from "../services/galleryService.ts";
import {useNavigate} from "react-router-dom";
import {IMovie} from "../types/IMovie.ts";
import {getRatingColor} from "../utils/getRatingColor.ts";

interface GalleryItemProps {
    movie: IMovie,
}

const MovieCard: FC<GalleryItemProps> = ({movie}) => {
    const navigate = useNavigate()
    const posterRef = useRef<HTMLImageElement>(null);
    const isHover = useHover(posterRef);

    const parsedLength = getParsedMovieLength(movie.movieLength)

    return (
        <li className={'gallery__item'} onClick={() => galleryService.navigateToMovie(movie.id, navigate)}>
            <div className={'card'}>
                <div ref={posterRef} className={'hover-wrapper'}>
                    <img src={movie.poster.url} alt={movie.name} className={'card__poster'}/>
                    {isHover
                        &&
                        <div className={'hover'}>
                            <FontAwesomeIcon className={'hover__icon'} icon={["fas", 'bookmark']}/>
                            <div className={'hover__info-wrapper'}>
                                <p className={'hover__rating ' + getRatingColor(movie.rating.kp)}>{movie.rating.kp.toFixed(1)}</p>
                                <div className={'hover__info'}>
                                    <p className={'hover__info-duration'}>{movie.type !== 'tv-series' ? parsedLength : ''}</p>
                                    <p className={'hover__info-genre'}>{movie.genres[0].name}</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className={'card__info'}>
                    <div className={'card__info-title'}>
                        {movie.name}
                    </div>
                    <div className={'card__info-year'}>
                        {movie.ageRating + '+'}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default MovieCard;