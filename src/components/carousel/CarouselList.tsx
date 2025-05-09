import {FC, RefObject} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CarouselItem from "./CarouselItem.tsx";
import {DESKTOP_SCROLL_CAROUSEL_OFFSET} from "../../constants/constants.ts";
import {IMovie} from "../../types/IMovie.ts";

interface CarouselListProps {
    movies: IMovie[],
    scroll: (direction: string, ref: RefObject<null>, offset: number) => void,
    ref: RefObject<null>,
}

const CarouselList: FC<CarouselListProps> = ({movies, scroll, ref}) => {


    return (
        <div className="carousel">
            <FontAwesomeIcon className={'carousel__icon'} icon={["fas", 'chevron-left']}
                             onClick={() => scroll('left', ref, 1095)}/>
            <ul ref={ref} className={'carousel__list'}>
                {movies.map(movie =>
                    <CarouselItem key={movie.id} movie={movie}/>
                )}
            </ul>
            <FontAwesomeIcon className={'carousel__icon'} icon={["fas", 'chevron-right']}
                             onClick={() => scroll('right', ref, DESKTOP_SCROLL_CAROUSEL_OFFSET)}/>
        </div>
    );
};

export default CarouselList;