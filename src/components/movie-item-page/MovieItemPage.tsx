import Button from "../ui/Button.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IMovie} from "../../types/IMovie.ts";
import {FC, useRef} from "react";
import {getParsedMovieLength} from "../../utils/getParsedMovieLength.ts";
import {getRatingColor} from "../../utils/getRatingColor.ts";
import KinoboxPlayer from "../KinoboxPlayer.tsx";
import {getPremierDate} from "../../utils/getPremierDate.ts";

interface MoviePageItemProps {
    movie: IMovie,
}

const MovieItemPage: FC<MoviePageItemProps> = ({movie}) => {
    const movieLength = getParsedMovieLength(movie?.movieLength);
    const playerRef = useRef<HTMLHRElement>(null)

    const scrollToPlayer = () => {
        playerRef?.current?.scrollIntoView({block: 'start'})
    }

    return (
        <div className={'movie'}>
            <div className={'movie__left-column'}>
                <img className={'movie__poster'} src={movie?.poster.url} alt={movie?.name}/>
                <div className={'movie__trailers'}>
                    <ul className={'movie__trailers-list'}>
                        {movie?.videos?.trailers?.map(trailer =>
                            <li key={trailer.name} className={'movie__trailers-item'}>
                                <iframe className={'movie__trailer'} src={trailer.url}></iframe>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className={'movie__info'}>
                <div className={'movie__name'}>{movie?.name}</div>
                <div
                    className={'movie__original-name'}>{`${movie?.alternativeName || movie?.name} (${movie?.year})`}</div>
                <div className={'movie__buttons'}>
                    <Button onClick={scrollToPlayer}>Смотреть</Button>
                    <div className={'movie__buttons-bookmark'}>
                        <FontAwesomeIcon className={'movie__buttons-bookmark-icon'} icon={["fas", 'bookmark']}/>
                    </div>
                </div>
                <div className={'movie__short-description'}>{movie?.shortDescription}</div>
                <div className={'movie__info-title'}>О фильме</div>
                <div className={'about'}>
                    {
                        movie?.year &&
                        <div className={'about__row'}>
                            <div className={'about__name'}>Год производства</div>
                            <div className={'about__value'}>{movie?.year}</div>
                        </div>
                    }
                    {
                        movie?.countries &&
                        <div className={'about__row'}>
                            <div className={'about__name'}>Страна</div>
                            <div className={'about__value'}>{movie?.countries.map(country =>
                                `${country.name} `
                            )}</div>
                        </div>
                    }
                    {
                        movie?.genres &&
                        <div className={'about__row'}>
                            <div className={'about__name'}>Жанр</div>
                            <div className={'about__value'}>{movie?.genres.map(genre =>
                                `${genre.name} `
                            )}</div>
                        </div>
                    }
                    {
                        movie?.slogan &&
                        <div className={'about__row'}>
                            <div className={'about__name'}>Слоган</div>
                            <div className={'about__value'}>{movie?.slogan || '—'}</div>
                        </div>
                    }
                    {
                        movie?.ageRating &&
                        <div className={'about__row'}>
                            <div className={'about__name'}>Возраст</div>
                            <div className={'about__value'}>{`${movie?.ageRating}+`}</div>
                        </div>
                    }
                    {
                        movie?.premiere &&
                        <div className={'about__row'}>
                            <div className={'about__name'}>Премьера</div>
                            <div className={'about__value'}>{getPremierDate(movie?.premiere?.world?.toString())}</div>
                        </div>
                    }
                    {
                        movie?.movieLength &&
                        <div className={'about__row'}>
                            <div className={'about__name'}>Длительность</div>
                            <div className={'about__value'}>{movieLength}</div>
                        </div>
                    }
                    {
                        movie?.budget &&
                        <div className={'about__row'}>
                            <div className={'about__name'}>Бюджет</div>
                            <div
                                className={'about__value'}>
                                {movie?.budget?.value?.toLocaleString('en-US', {
                                    style: "currency",
                                    currency: 'USD'
                                })}
                            </div>
                        </div>
                    }
                    {
                        movie?.fees &&
                        <div className={'about__row'}>
                            <div className={'about__name'}>Сборы</div>
                            <div
                                className={'about__value'}>
                                {movie?.fees?.world?.value?.toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD'
                                    })
                                    ||
                                    movie?.fees?.russia.value.toLocaleString('ru-Ru', {
                                        style: 'currency',
                                        currency: 'Rub'
                                    })
                                }
                            </div>
                        </div>
                    }
                </div>
                <div className={'movie__info-title'}>Описание</div>
                <div className={'movie__description'}>
                    {movie?.description}
                </div>
                <div className={'movie__info-title'}>Смотреть</div>
                <KinoboxPlayer kpId={movie?.id.toString()}/>
                <hr className={'scroll-box'} ref={playerRef}/>
            </div>
            <div className={'movie__right-column'}>
                <div className={'rating'}>
                    <div className={'rating__item'}>
                        <div className={'movie__rating ' + getRatingColor(movie?.rating.kp)}>
                            {movie?.rating?.kp?.toFixed(1)}
                        </div>
                        <span className={'rating__name'}>Кинопоиск</span>
                    </div>
                    <div className={'rating__item'}>
                        <div className={'movie__rating ' + getRatingColor(movie?.rating.imdb)}>
                            {movie?.rating?.imdb?.toFixed(1)}
                        </div>
                        <span className={'rating__name'}>IMDB</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieItemPage;