import {FC} from "react";
import CarouselDots from "./CarouselDots.tsx";
import {IMovie} from "../../types/IMovie.ts";
import CarouselList from "./CarouselList.tsx";

interface CarouselProps {
    movies: IMovie[],
}

const Carousel: FC<CarouselProps> = ({movies}) => {

    return (
        <div className={'container'}>
            <h2 className={'carousel__header'}>Новинки</h2>
            <CarouselList movies={movies}/>
            <CarouselDots quantity={movies.length}/>
        </div>
    );
};

export default Carousel;