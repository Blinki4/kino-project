import Button from "../ui/Button.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IMovie} from "../../types/IMovie.ts";
import {FC} from "react";
import {getParsedMovieLength} from "../../utils/getParsedMovieLength.ts";
import {getRatingColor} from "../../utils/getRatingColor.ts";

interface MoviePageItemProps {
    movie: IMovie,
}

const MoviePageItem: FC<MoviePageItemProps> = ({movie}) => {
    const movieLength = getParsedMovieLength(movie.movieLength)

    return (
        <div className={'movie'}>
            <div className={'movie__left-column'}>
                <img className={'movie__poster'} src={movie.poster.url} alt={movie.name}/>
            </div>
            <div className={'movie__info'}>
                <div className={'movie__name'}>{movie.name}</div>
                <div className={'movie__original-name'}>{`${movie.alternativeName} (${movie.year})`}</div>
                <div className={'movie__buttons'}>
                    <Button>Смотреть</Button>
                    <Button className={'movie__buttons-bookmark'}>
                        <FontAwesomeIcon icon={["fas", 'bookmark']}/>
                    </Button>
                </div>
                <div className={'movie__short-description'}>{movie.shortDescription}</div>
                <div className={'about__title'}>О фильме</div>
                <div className={'about'}>
                    <div className={'about__row'}>
                        <div className={'about__name'}>Год производства</div>
                        <div className={'about__value'}>{movie.year}</div>
                    </div>
                    <div className={'about__row'}>
                        <div className={'about__name'}>Страна</div>
                        <div className={'about__value'}>{movie.countries.map(country =>
                            `${country.name} `
                        )}</div>
                    </div>
                    <div className={'about__row'}>
                        <div className={'about__name'}>Жанр</div>
                        <div className={'about__value'}>{movie.genres.map(genre =>
                            `${genre.name} `
                        )}</div>
                    </div>
                    <div className={'about__row'}>
                        <div className={'about__name'}>Слоган</div>
                        <div className={'about__value'}>{movie.slogan}</div>
                    </div>
                    <div className={'about__row'}>
                        <div className={'about__name'}>Возраст</div>
                        <div className={'about__value'}>{`${movie.ageRating}+`}</div>
                    </div>
                    <div className={'about__row'}>
                        <div className={'about__name'}>Премьера</div>
                        <div className={'about__value'}>{movie.premiere?.world?.toString()}</div>
                    </div>
                    <div className={'about__row'}>
                        <div className={'about__name'}>Длительность</div>
                        <div className={'about__value'}>{movieLength}</div>
                    </div>
                    <div className={'about__row'}>
                        <div className={'about__name'}>Бюджет</div>
                        <div className={'about__value'}>{movie.budget.currency + movie.budget.value}</div>
                    </div>
                    <div className={'about__row'}>
                        <div className={'about__name'}>Сборы</div>
                        <div
                            className={'about__value'}>{movie.fees.world.currency + movie.fees.world.value}</div>
                    </div>
                </div>
            </div>
            <div className={'movie__right-column'}>
                <div className={'rating'}>
                    <div className={'rating__item'}>
                        <div className={'movie__rating ' + getRatingColor(movie.rating.kp)}>
                            {movie.rating.kp.toFixed(1)}
                        </div>
                        <span className={'rating__name'}>Кинопоиск</span>
                    </div>
                    <div className={'rating__item'}>
                        <div className={'movie__rating ' + getRatingColor(movie.rating.imdb)}>
                            {movie.rating.imdb.toFixed(1)}
                        </div>
                        <span className={'rating__name'}>IMDB</span>
                    </div>
                    <div className={'rating__item'}>
                        <div className={'movie__rating ' + getRatingColor(movie.rating.tmdb)}>
                            {movie.rating.tmdb.toFixed(1)}
                        </div>
                        <span className={'rating__name'}>TMDB</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviePageItem;