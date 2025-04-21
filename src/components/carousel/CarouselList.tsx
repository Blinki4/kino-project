import {FC, useRef} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {carouselService} from "./carouselService.ts";
import {IMovie} from "../../types/IMovie.ts";
import CarouselItem from "./CarouselItem.tsx";

interface CarouselListProps {
    movies: IMovie[],
}

const CarouselList: FC<CarouselListProps> = ({movies}) => {
    const carouselListRef = useRef(null);

    return (
        <div className="carousel">
            <FontAwesomeIcon className={'carousel__icon'} icon={["fas", 'chevron-left']}
                             onClick={() => carouselService.carouselScroll('left', carouselListRef)}/>
            <ul ref={carouselListRef} className={'carousel__list'}>
                {movies.map(movie =>
                    <CarouselItem key={movie.id} movie={movie}/>
                )}
            </ul>
            <FontAwesomeIcon className={'carousel__icon'} icon={["fas", 'chevron-right']}
                             onClick={() => carouselService.carouselScroll('right', carouselListRef)}/>
        </div>
    );
};

export default CarouselList;