import {FC} from 'react';
import {IMovie} from "../../types/IMovie.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface CarouselItemProps {
    movie: IMovie,
}

const CarouselItem: FC<CarouselItemProps> = ({movie}) => {
    return (
        <li className={'carousel__item'}>
            <img className={'carousel__poster'} src={movie.poster} alt={movie.title}/>
            <div className={'carousel__info'}>
                <div className={'carousel__info-title'}>
                    {movie.title}
                </div>
                <div className={'carousel__buttons'}>
                    <button>Смотреть</button>
                    <FontAwesomeIcon className={'carousel__icon'} icon={["fas", 'bookmark']}/>
                </div>
            </div>
        </li>
    );
};

export default CarouselItem;