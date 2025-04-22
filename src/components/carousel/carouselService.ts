class CarouselService {
    carouselScroll(direction: string, ref: { current: any }) {
        const scrollOffset: number = 1095
        if (direction === 'left') {
            ref.current!.scrollLeft -= scrollOffset;
        }
        if (direction === 'right') {
            ref.current!.scrollLeft += scrollOffset;
        }
    };

    getCarouselDotsArray(count: number): Array<number> {
        const dots: Array<number> = [];
        for (let i = 0; i < count; i++) {
            dots.push(i);
        }
        return dots;
    }
}

export const carouselService = new CarouselService();