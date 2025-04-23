import {FC, useEffect, useRef, useState} from "react";
import CarouselDots from "./CarouselDots.tsx";
import CarouselList from "./CarouselList.tsx";
import {carouselService} from "./carouselService.ts";
import {DESKTOP_SCROLL_CAROUSEL_OFFSET} from "../../constants/constants.ts";
import {IMovie} from "../../types/IMovie.ts";

interface CarouselProps {
    movies: IMovie[],
}

const Carousel: FC<CarouselProps> = ({movies}) => {
    const [page, setPage] = useState(0);
    const carouselListRef = useRef(null);
    const dotsQuantity = movies.length;
    const dots = carouselService.getCarouselDotsArray(dotsQuantity);

    const carouselScrollByClick = (direction: string, ref: { current: any }, offset: number) => {
        const scrollOffset: number = offset
        if (direction === 'left') {
            if (page === 0) {
                ref.current!.scrollLeft += 90000;
                setPage(dotsQuantity - 1)
                return
            }

            ref.current!.scrollLeft -= scrollOffset;
            setPage(prevState => prevState - 1)
        }
        if (direction === 'right') {
            if (page === dotsQuantity - 1) {
                ref.current!.scrollLeft -= 90000;
                setPage(0)
                return
            }

            ref.current!.scrollLeft += scrollOffset;
            setPage(prevState => prevState + 1)
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            if (page === dotsQuantity - 1) {
                carouselService.carouselScroll('left', carouselListRef, 9000)
                setPage(0)
                return
            }
            setPage(prevState => prevState === dotsQuantity - 1 ? prevState = 0 : prevState + 1)
            carouselService.carouselScroll('right', carouselListRef, DESKTOP_SCROLL_CAROUSEL_OFFSET)
        }, 6000);
        return () => clearInterval(timer)
    })

    return (
        <div className={'container'}>
            <h2 className={'carousel__header'}>Новинки</h2>
            <CarouselList movies={movies} ref={carouselListRef} scroll={carouselScrollByClick}/>
            <CarouselDots dots={dots} page={page}/>
        </div>
    );
};

export default Carousel;