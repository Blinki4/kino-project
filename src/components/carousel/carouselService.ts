class CarouselService {
    carouselScroll(direction: string, ref: { current: any }, offset: number) {
        //1095
        const scrollOffset: number = offset
        if (direction === 'left') {
            ref.current!.scrollLeft -= scrollOffset;
        }
        if (direction === 'right') {
            ref.current!.scrollLeft += scrollOffset;
        }
    };

    getCarouselDotsArray(count: number): number[] {
        const dots: number[] = [];
        for (let i = 0; i < count; i++) {
            dots.push(i);
        }
        return dots;
    }
}

export const carouselService = new CarouselService();