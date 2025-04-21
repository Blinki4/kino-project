import {FC} from 'react';
import {IMovie} from "../../types/IMovie.ts";

interface CarouselItemProps {
    movie: IMovie,
}

const CarouselItem: FC<CarouselItemProps> = ({movie}) => {
    return (
        <li className={'carousel__item'}>
            <img className={'carousel__poster'} src={movie.poster} alt={movie.title}/>
        </li>
    );
};

export default CarouselItem;