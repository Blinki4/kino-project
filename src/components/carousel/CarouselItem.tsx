import {FC} from 'react';
import spiderPoster from "../../assets/spider-man-bg.webp";
import {IMovie} from "../../types/IMovie.ts";

interface CarouselItemProps {
    movie: IMovie,
}

const CarouselItem: FC<CarouselItemProps> = () => {
    return (
        <li className={'carousel__item'}>
            <img className={'carousel__poster'} src={spiderPoster} alt={''}/>
        </li>
    );
};

export default CarouselItem;