import {FC} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "../ui/Button.tsx";

import {carouselService} from "./carouselService.ts";
import {useNavigate} from "react-router-dom";
import {IMovie} from "../../types/IMovie.ts";

interface CarouselItemProps {
    movie: IMovie,
}

const CarouselItem: FC<CarouselItemProps> = ({movie}) => {
    const navigate = useNavigate();

    return (
        <li className={'carousel__item'}>
            <img className={'carousel__poster'} src={movie.backdrop.url} alt={movie.name}/>
            <div className={'carousel__info'}>
                <div className={'carousel__info-title'}>
                    {movie.name}
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