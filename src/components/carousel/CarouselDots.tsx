import {FC, useEffect, useState} from 'react';

import {carouselService} from "./carouselService.ts";

interface CarouselDotsProps {
    quantity: number,
}

const CarouselDots: FC<CarouselDotsProps> = ({quantity}) => {
    const [page, setPage] = useState(0);
    const dots = carouselService.getCarouselDotsArray(quantity);

    useEffect(() => {
        const timer = setInterval(() => {
            if (page === quantity) {
                setPage(0)
                return
            }
            setPage(prevState => prevState === quantity - 1 ? prevState = 0 : prevState + 1)
        }, 5000);
        return () => clearInterval(timer)
    })

    return (
        <ul className={'carousel__dots'}>
            {dots.map(dot =>
                <div key={dot} className={page === dot ? 'dot-active' : 'dot'}>

                </div>
            )}
        </ul>
    );
};

export default CarouselDots;