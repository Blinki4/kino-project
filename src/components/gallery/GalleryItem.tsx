import {IMovieLess} from "../../types/IMovieLess.ts";
import {FC, useRef} from "react";
import useHover from "../../hooks/useHover.ts";
import {getParsedMovieLength} from "../../utils/getParsedMovieLength.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {galleryService} from "./galleryService.ts";
import {useNavigate} from "react-router-dom";

interface GalleryItemProps {
    movie: IMovieLess,
}

const GalleryItem: FC<GalleryItemProps> = ({movie}) => {
    const navigate = useNavigate()
    const posterRef = useRef<HTMLImageElement>(null);
    const isHover = useHover(posterRef);

    const parsedLength = getParsedMovieLength(movie.movieLength)

    return (
        <li className={'gallery__item'} onClick={() => galleryService.navigateToMovie(movie.id, navigate)}>
            <div className={'card'}>
                <div ref={posterRef} className={'hover-wrapper'}>
                    <img src={movie.poster} alt={movie.poster} className={'card__poster'}/>
                    {isHover
                        &&
                        <div className={'hover'}>
                            <FontAwesomeIcon className={'hover__icon'} icon={["fas", 'bookmark']}/>
                            <div className={'hover__info-wrapper'}>
                                <p className={'hover__rating'}>{movie.rating}</p>
                                <div className={'hover__info'}>
                                    <p className={'hover__info-duration'}>{parsedLength}</p>
                                    <p className={'hover__info-country'}>{movie.country}</p>
                                </div>
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