import {FC, useEffect, useState} from "react";
import CarouselDots from "./CarouselDots.tsx";
import {IMovie} from "../../types/IMovie.ts";
import CarouselList from "./CarouselList.tsx";
import {carouselService} from "./carouselService.ts";

interface CarouselProps {
    movies: IMovie[],
}

const Carousel: FC<CarouselProps> = ({movies}) => {
    const [page, setPage] = useState(0)
    const dotsQuantity = movies.length
    const dots = carouselService.getCarouselDotsArray(dotsQuantity);

    useEffect(() => {
        const timer = setInterval(() => {
            if (page === dotsQuantity) {
                setPage(0)
                return
            }
            setPage(prevState => prevState === dotsQuantity - 1 ? prevState = 0 : prevState + 1)
        }, 5000);
        return () => clearInterval(timer)
    })

    return (
        <div className={'container'}>
            <h2 className={'carousel__header'}>Новинки</h2>
            <CarouselList movies={movies}/>
            <CarouselDots dots={dots} page={page}/>
        </div>
    );
};

export default Carousel;