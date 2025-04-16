import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import GalleryList from "./GalleryList.tsx";

const Gallery = () => {

    return (
        <div className={'container'}>
            <div className={'gallery__header'}>
                <div className={'gallery__header-title'}>Фильмы-новинки</div>
                <FontAwesomeIcon className={'gallery__header-icon'} icon={["fas", 'chevron-right']}/>
            </div>
            <GalleryList/>
        </div>
    );
};

export default Gallery;