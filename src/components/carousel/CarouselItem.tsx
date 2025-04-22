import {FC} from 'react';
import {IMovie} from "../../types/IMovie.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "../ui/Button.tsx";

import {carouselService} from "./carouselService.ts";
import {useNavigate} from "react-router-dom";

interface CarouselItemProps {
    movie: IMovie,
}

const CarouselItem: FC<CarouselItemProps> = ({movie}) => {
    const navigate = useNavigate();

    return (
        <li className={'carousel__item'}>
            <img className={'carousel__poster'} src={movie.poster} alt={movie.title}/>
            <div className={'carousel__info'}>
                <div className={'carousel__info-title'}>
                    {movie.title}
                </div>
                <div className={'carousel__buttons'}>
                    <Button onClick={() => carouselService.navigateToMovie(movie.id, navigate)}>Смотреть</Button>
                    <FontAwesomeIcon className={'carousel__icon'} icon={["fas", 'bookmark']}/>
                </div>
            </div>
        </li>
    );
};

export default CarouselItem;