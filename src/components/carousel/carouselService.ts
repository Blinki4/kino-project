class CarouselService {
    carouselScroll(direction: string, ref: { current: any }) {
        const scrollOffset: number = 1110
        console.log(scrollOffset)
        if (direction === 'left') {
            ref.current!.scrollLeft -= scrollOffset;
        }
        if (direction === 'right') {
            ref.current!.scrollLeft += scrollOffset;
        }
    };
}

export const carouselService = new CarouselService();