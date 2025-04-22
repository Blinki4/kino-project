import {FC} from 'react';

interface CarouselDotsProps {
    dots: number[],
    page: number,
}

const CarouselDots: FC<CarouselDotsProps> = ({dots, page}) => {

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