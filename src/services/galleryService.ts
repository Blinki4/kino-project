class GalleryService {
    galleryScroll(direction: string, ref: { current: any }) {
        const width: number = window.innerWidth
        let scrollOffset: number = 1135
        if (width <= 1280) {
            scrollOffset = 220
        }
        if (direction === 'left') {
            ref.current!.scrollLeft -= scrollOffset;
        }
        if (direction === 'right') {
            ref.current!.scrollLeft += scrollOffset;
        }
    };

    navigateToMovie(id: number, navigate: (route: string) => void) {
        navigate('/movie/' + id);
    };
}

export const galleryService = new GalleryService();